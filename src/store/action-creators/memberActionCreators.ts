import axios from 'axios';
import { Dispatch } from 'redux';
import { batch } from 'react-redux';

import { MemberActionType } from '../action-types/memberTypes';
import { MemberAction } from '../actions/memberActions';
import { memberType } from '../../states/memberTypes';
import { AllClubs } from '../../states/clubTypes';

const url = '/members';

const loadingMembers = (load: boolean) => {
	return (dispatch: Dispatch<MemberAction>) => {
		dispatch({
			type: MemberActionType.MEMBERS_LOADING,
			payload: load,
		});
	};
};

const fetchMembers = () => {
	return async (dispatch: Dispatch<MemberAction>) => {
		try {
			const res = await axios.get(url);
			if (res.data || res.status === 200) {
				dispatch({
					type: MemberActionType.GET_MEMBERS,
					payload: res.data.data,
				});
			} else {
				dispatch({
					type: MemberActionType.GET_MEMBERS,
					payload: [],
				});
			}
		} catch (error) {
			dispatch({
				type: MemberActionType.GET_MEMBERS,
				payload: [],
			});
		}
	};
};

const fetchClubsWithoutMember = () => {
	return async (dispatch: Dispatch<MemberAction>) => {
		let clb = [{ _id: '', name: '' } as AllClubs];
		try {
			const resClubs = await axios.get('/clubs');

			if (resClubs.data || resClubs.status === 200) {
				clb = clb.concat(
					resClubs.data.data.map((item: AllClubs) => {
						return {
							_id: item._id,
							name: item.name,
						};
					})
				);
				dispatch({
					type: MemberActionType.GET_MEMBER,
					payload: {} as memberType,
					refClub: clb,
				});
			}
		} catch (error) {
			dispatch({
				type: MemberActionType.GET_MEMBER,
				payload: {} as memberType,
				refClub: clb,
			});
		}
	};
};

const fetchMemberWithClub = (id?: string) => {
	return async (dispatch: Dispatch<MemberAction>) => {
		let clb = [{ _id: '', name: '' } as AllClubs];
		try {
			const [resMember, resClubs] = await Promise.all([
				axios.get(url + '/' + id),
				axios.get('/clubs'),
			]);

			if (resMember.data || resMember.status === 200) {
				clb = clb.concat(
					resClubs.data.data.map((item: AllClubs) => {
						return {
							_id: item._id,
							name: item.name,
						};
					})
				);
				dispatch({
					type: MemberActionType.GET_MEMBER,
					payload: resMember.data.data,
					refClub: clb,
				});
			}
		} catch (error) {
			dispatch({
				type: MemberActionType.GET_MEMBER,
				payload: {} as memberType,
				refClub: clb,
			});
		}
	};
};

export const getMemebrs = () => {
	return (dispatch: Dispatch<any>) => {
		batch(() => {
			dispatch(loadingMembers(true));
			dispatch(fetchMembers());
		});
	};
};

export const getMemberWithId = (id?: string) => {
	return (dispatch: Dispatch<any>) => {
		batch(() => {
			dispatch(loadingMembers(true));
			dispatch(fetchMemberWithClub(id));
		});
	};
};

export const getMemberWithOutId = () => {
	return (dispatch: Dispatch<any>) => {
		batch(() => {
			dispatch(loadingMembers(true));
			dispatch(fetchClubsWithoutMember());
		});
	};
};

export const createMember = (data: any, redirect: Function) => {
	return async (dispatch: Dispatch<MemberAction>) => {
		try {
			const res = await axios.post(url, data);
			if (res.data || res.status === 200) {
				redirect();
			}
		} catch (error: any) {
			dispatch({
				type: MemberActionType.GET_MEMBER_ERRORS,
				payload: error.response.data.errors,
			});
		}
	};
};

export const editMember = (id: string, data: any, redirect: Function) => {
	return async (dispatch: Dispatch<MemberAction>) => {
		try {
			const res = await axios.put(url + '/' + id, data);
			if (res.data || res.status === 200) {
				redirect();
			}
		} catch (error: any) {
			dispatch({
				type: MemberActionType.GET_MEMBER_ERRORS,
				payload: error.response.data.errors,
			});
		}
	};
};

export const deleteMember = (id: string) => {
	return async (dispatch: Dispatch<MemberAction>) => {
		try {
			const res = await axios.delete(url + '/' + id);
			if (res.data || res.status === 200) {
				dispatch({
					type: MemberActionType.DELETE_MEMBER,
					payload: id,
				});
			}
		} catch (error: any) {
			if (error && error.response) {
				dispatch({
					type: MemberActionType.GET_ERROR_MESSAGE,
					payload: error.response.data.message,
				});
			}
		}
	};
};

export const clearMember = () => {
	return async (dispatch: Dispatch<MemberAction>) => {
		dispatch({
			type: MemberActionType.CLEAR_MEMBER,
		});
	};
};

export const clearMembers = () => {
	return async (dispatch: Dispatch<MemberAction>) => {
		dispatch({
			type: MemberActionType.CLEAR_MEMBERS,
		});
	};
};
