import { ClubActionType } from '../action-types/clubTypes';
import { AllClubs, clubType, ClubErrorType } from '../../states/clubTypes';

interface LoadingAction {
	type: ClubActionType.CLUBS_LOADING;
	payload: boolean;
}

interface GetClubs {
	type: ClubActionType.GET_CLUBS;
	payload: AllClubs[];
}

interface GetClub {
	type: ClubActionType.GET_CLUB;
	payload: clubType;
}

interface GetClubErrors {
	type: ClubActionType.GET_CLUB_ERRORS;
	payload: ClubErrorType;
}

interface ClearClubs {
	type: ClubActionType.CLEAR_CLUBS;
}

interface ClearClub {
	type: ClubActionType.CLEAR_CLUB;
}

export type ClubAction =
	| LoadingAction
	| GetClubs
	| GetClub
	| GetClubErrors
	| ClearClubs
	| ClearClub;
