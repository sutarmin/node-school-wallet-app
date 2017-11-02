import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Card from './Card';
import CardLayout from './CardLayout';
import {Card as CardShape} from '../types/types';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: #242424;
	padding: 20px;
`;

const Logo = styled.div`
	width: 147px;
	height: 28px;
	margin-bottom: 55px;
	background-image: url('/assets/yamoney-logo.svg');
`;

const Footer = styled.div`
	color: rgba(255, 255, 255, 0.2);
	font-size: 15px;
`;

const CardsList = styled.div`
	flex: 1;
`;
const NewCardLayout = styled(CardLayout)`
	background-color: transparent;
	background-image: url('/assets/cards-add.svg');
	background-repeat: no-repeat;
	background-position: center;
	box-sizing: border-box;
	border: 2px dashed rgba(255, 255, 255, 0.2);
`;

/**
 * Панель карт
 * @param {Object} props
 * @returns {JSX}
 */
const CardsBar = ({
	cardsList, activeCardId, isCardsEditable, onCardClick, onCardEdit, onCardAdd,
}) => (
	<Layout>
		<Logo />
		<CardsList>
			{cardsList.map((card) => (
				<Card
					key={card.id}
					active={card.id === activeCardId}
					editable={isCardsEditable}
					theme={card.theme}
					number={card.number}
					onClick={() => onCardClick(cardsList, card.id)}
					onEdit={() => onCardEdit(card.id)} />
			))}
			<NewCardLayout onClick={onCardAdd} />
		</CardsList>
		<Footer>Yamoney Node School</Footer>
	</Layout>
);

CardsBar.propTypes = {
	cardsList: PropTypes.arrayOf(CardShape).isRequired,
	activeCardId: PropTypes.number,
	isCardsEditable: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
	onCardEdit: PropTypes.func.isRequired,
	onCardAdd: PropTypes.func.isRequired,
};

export default CardsBar;
