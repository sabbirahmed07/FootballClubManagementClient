import { combineReducers } from 'redux';
import clubReducer from './clubReducers';
import memberReducer from './memberReducers';

const reducers = combineReducers({
	clubState: clubReducer,
	memberState: memberReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
