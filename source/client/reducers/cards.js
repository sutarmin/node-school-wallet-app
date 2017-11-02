import {handleActions} from 'redux-actions';

import {addCard, removeCard} from '../actions/cards';

const defaultState = {
	cards: [],
};

const cardsReducer = handleActions({
	[addCard](state, {payload: {card}}) {
		return {
			cards: [...state.cards, card],
		};
	},
	[removeCard](state, {payload: {id}}) {
		const index = state.cards.find((card) => card.id === id);
		if (index) {
			return {
				cards: [
					...state.cards.slice(0, index),
					...state.cards.slice(index + 1),
				],
			};
		}

		return state;
	},
}, defaultState);

export default cardsReducer;
