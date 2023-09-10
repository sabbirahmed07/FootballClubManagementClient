import { AllClubs, ClubErrorType, clubType } from '../../states/clubTypes';
export enum ClubActionType {
	CLUBS_LOADING = 'FETCHING_CLUBS',
	GET_CLUBS = 'GET_CLUBS',
	GET_CLUB = 'GET_CLUB',
	GET_CLUB_ERRORS = 'GET_CLUB_ERRORS',
	CLEAR_CLUBS = 'CLEAR_CLUBS',
	CLEAR_CLUB = 'CLEAR_CLUB',
}

export interface IClubState {
	clubs: AllClubs[];
	club: clubType;
	errors: ClubErrorType;
	loading: boolean;
}
