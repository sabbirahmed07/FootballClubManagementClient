import { ClubAction } from '../actions/clubActions';
import { ClubActionType, IClubState } from '../action-types/clubTypes';
import { ClubErrorType, clubType } from '../../states/clubTypes';

const initialState: IClubState = {
	clubs: [],
	loading: false,
	club: {} as clubType,
	errors: {} as ClubErrorType,
};

const clubReducer = (
	state: IClubState = initialState,
	action: ClubAction
): IClubState => {
	switch (action.type) {
		case ClubActionType.CLUBS_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case ClubActionType.GET_CLUBS:
			return {
				...state,
				loading: false,
				clubs: action.payload,
			};
		case ClubActionType.GET_CLUB:
			return {
				...state,
				loading: false,
				club: action.payload,
			};
		case ClubActionType.GET_CLUB_ERRORS:
			return {
				...state,
				errors: action.payload,
			};
		case ClubActionType.CLEAR_CLUBS:
			return {
				...state,
				clubs: [],
			};
		case ClubActionType.CLEAR_CLUB:
			return {
				...state,
				club: {} as clubType,
				errors: {} as ClubErrorType,
			};
		default:
			return state;
	}
};

export default clubReducer;
