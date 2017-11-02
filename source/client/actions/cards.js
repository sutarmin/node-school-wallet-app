import {createActions} from 'redux-actions';

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const {addCard, removeCard} = createActions({
	ADD_CARD: (card) => ({card}),
	REMOVE_CARD: (id) => ({id}),
});
