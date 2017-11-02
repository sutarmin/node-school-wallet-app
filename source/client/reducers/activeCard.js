import {handleAction} from 'redux-actions';

import {changeActiveCard} from '../actions/activeCard';

const defaultState = {
	activeCard: null,
};

const currentCardReducer = handleAction(
	changeActiveCard,
	(state, {payload: {cards, id}}) => cards.find((card) => card.id === id),
	defaultState,
);

export default currentCardReducer;
