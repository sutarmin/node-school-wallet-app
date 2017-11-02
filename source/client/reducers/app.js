import {combineReducers} from 'redux';

import cards from './cards';
import activeCard from './activeCard';
import user from './user';
import history from './history';

export default combineReducers({
	cards,
	activeCard,
	user,
	history,
});
