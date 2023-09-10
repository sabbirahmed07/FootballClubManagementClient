import { MemberActionType } from '../action-types/memberTypes';
import {
	AllMembers,
	memberType,
	MemberErrorType,
} from '../../states/memberTypes';
import { AllClubs } from '../../states/clubTypes';

interface LoadingAction {
	type: MemberActionType.MEMBERS_LOADING;
	payload: boolean;
}

interface GetMembers {
	type: MemberActionType.GET_MEMBERS;
	payload: AllMembers[];
}

interface GetMember {
	type: MemberActionType.GET_MEMBER;
	payload: memberType;
	refClub: AllClubs[];
}

interface DeleteMember {
	type: MemberActionType.DELETE_MEMBER;
	payload: string;
}

interface GetMemberErrors {
	type: MemberActionType.GET_MEMBER_ERRORS;
	payload: MemberErrorType;
}

interface ClearMembers {
	type: MemberActionType.CLEAR_MEMBERS;
}

interface ClearMember {
	type: MemberActionType.CLEAR_MEMBER;
}

interface GetErrorMessage {
	type: MemberActionType.GET_ERROR_MESSAGE;
	payload: string;
}

export type MemberAction =
	| LoadingAction
	| GetMembers
	| GetMember
	| DeleteMember
	| GetMemberErrors
	| ClearMembers
	| GetErrorMessage
	| ClearMember;
