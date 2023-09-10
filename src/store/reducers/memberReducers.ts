import { MemberAction } from '../actions/memberActions';
import { MemberActionType, IMemberState } from '../action-types/memberTypes';
import { MemberErrorType, memberType } from '../../states/memberTypes';
const initialState: IMemberState = {
	members: [],
	loading: false,
	member: {} as memberType,
	errors: {} as MemberErrorType,
	clubs: [],
	errorMessage: '',
};

const memberReducer = (
	state: IMemberState = initialState,
	action: MemberAction
): IMemberState => {
	switch (action.type) {
		case MemberActionType.MEMBERS_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case MemberActionType.GET_MEMBERS:
			return {
				...state,
				members: action.payload,
				loading: false,
			};
		case MemberActionType.GET_MEMBER:
			return {
				...state,
				member: action.payload,
				loading: false,
				clubs: action.refClub,
			};
		case MemberActionType.GET_MEMBER_ERRORS:
			return {
				...state,
				errors: action.payload,
			};
		case MemberActionType.DELETE_MEMBER:
			let oldMembers = [...state.members];
			let updatedMembers = oldMembers.filter(
				(item) => item._id !== action.payload
			);
			return {
				...state,
				members: updatedMembers,
			};
		case MemberActionType.CLEAR_MEMBER:
			return {
				...state,
				member: {} as memberType,
				clubs: [],
				errors: {} as MemberErrorType,
			};
		case MemberActionType.CLEAR_MEMBERS:
			return {
				...state,
				members: [],
			};
		default:
			return state;
	}
};

export default memberReducer;
