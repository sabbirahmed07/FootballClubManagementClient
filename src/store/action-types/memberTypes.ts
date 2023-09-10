import {
	AllMembers,
	memberType,
	MemberErrorType,
} from '../../states/memberTypes';
import { AllClubs } from '../../states/clubTypes';

export enum MemberActionType {
	MEMBERS_LOADING = 'MEMBERS_LOADING',
	GET_MEMBERS = 'GET_MEMBERS',
	GET_MEMBER = 'GET_MEMBER',
	GET_MEMBER_ERRORS = 'GET_MEMBER_ERRORS',
	CLEAR_MEMBERS = 'CLEAR_MEMBERS',
	CLEAR_MEMBER = 'CLEAR_MEMBER',
	DELETE_MEMBER = 'DELETE_MEMBER',
	GET_ERROR_MESSAGE = 'GET_ERROR_MESSAGE',
}

export interface IMemberState {
	members: AllMembers[];
	member: memberType;
	errors: MemberErrorType;
	loading: boolean;
	clubs: AllClubs[];
	errorMessage: string;
}
