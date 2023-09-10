import axios from 'axios';
import { Dispatch } from 'redux';
import { batch } from 'react-redux';

import { ClubActionType } from '../action-types/clubTypes';
import { ClubAction } from '../actions/clubActions';
import { clubType } from '../../states/clubTypes';

const url = '/clubs';

const loadingClubs = (load: boolean) => {
	return (dispatch: Dispatch<ClubAction>) => {
		dispatch({
			type: ClubActionType.CLUBS_LOADING,
			payload: load,
		});
	};
};

const fetchClubs = () => {
	return async (dispatch: Dispatch<ClubAction>) => {
		try {
			const res = await axios.get(url);
			if (res.data || res.status === 200) {
				dispatch({
					type: ClubActionType.GET_CLUBS,
					payload: res.data.data,
				});
			}
		} catch (error) {
			dispatch({
				type: ClubActionType.GET_CLUBS,
				payload: [],
			});
		}
	};
};

const fetchClub = (id: string) => {
	return async (dispatch: Dispatch<ClubAction>) => {
		try {
			const res = await axios.get(url + '/' + id);
			if (res.data || res.status === 200) {
				dispatch({
					type: ClubActionType.GET_CLUB,
					payload: res.data.data,
				});
			}
		} catch (error) {
			dispatch({
				type: ClubActionType.GET_CLUB,
				payload: {} as clubType,
			});
		}
	};
};

export const getClubs = () => {
	return (dispatch: Dispatch<any>) => {
		batch(() => {
			dispatch(loadingClubs(true));
			dispatch(fetchClubs());
		});
	};
};

export const getClub = (id: string) => {
	return (dispatch: Dispatch<any>) => {
		batch(() => {
			dispatch(loadingClubs(true));
			dispatch(fetchClub(id));
		});
	};
};

export const createClub = (data: any, redirect: Function) => {
	return async (dispatch: Dispatch<ClubAction>) => {
		try {
			const res = await axios.post(url, data);
			if (res.data || res.status === 200) {
				redirect();
			}
		} catch (error: any) {
			dispatch({
				type: ClubActionType.GET_CLUB_ERRORS,
				payload: error.response.data.errors,
			});
		}
	};
};

export const editClub = (id: string, data: any, redirect: Function) => {
	return async (dispatch: Dispatch<ClubAction>) => {
		try {
			const res = await axios.put(url + '/' + id, data);
			if (res.data || res.status === 200) {
				redirect();
			}
		} catch (error: any) {
			if (error && error.response) {
				dispatch({
					type: ClubActionType.GET_CLUB_ERRORS,
					payload: error.response.data.errors,
				});
			}
		}
	};
};

export const clearClub = () => {
	return async (dispatch: Dispatch<ClubAction>) => {
		dispatch({
			type: ClubActionType.CLEAR_CLUB,
		});
	};
};

export const clearClubs = () => {
	return async (dispatch: Dispatch<ClubAction>) => {
		dispatch({
			type: ClubActionType.CLEAR_CLUBS,
		});
	};
};
