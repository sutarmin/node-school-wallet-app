import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import CardEdit from './CardEdit';
import CardLayout from './CardLayout';
import {CardTheme} from '../types/types';

const CardLogo = styled.div`
	height: 28px;
	margin-bottom: 25px;
	background-image: url(${({url}) => url});
	background-size: contain;
	background-repeat: no-repeat;
	filter: ${({active}) => (active ? 'none' : 'grayscale(100%) opacity(60%)')};
`;

const CardNumber = styled.div`
	margin-bottom: 20px;
	color: ${({active, textColor}) => (active ? textColor : 'rgba(255, 255, 255, 0.6)')};
	font-size: 16px;
	font-family: 'OCR A Std Regular';
`;

const CardType = styled.div`
	height: 26px;
	background-image: url(${({url}) => url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position-x: right;
	filter: ${({active}) => (active ? 'none' : 'grayscale(100%) opacity(60%)')};
`;

/**
 * Карта
 * @param {Object} props
 * @returns {JSX}
 */
const Card = (props) => {
	const {
		active,
		editable,
		theme,
		onClick,
		onEdit,
		number,
	} = props;

	const {
		backgroundColor,
		textColor,
		bankLogoUrl,
		brandLogoUrl
	} = theme;

	return (
		<CardLayout active={active} backgroundColor={backgroundColor} onClick={onClick}>
			<CardEdit editable={editable} onClick={onEdit} />
			<CardLogo active={active} url={bankLogoUrl} />
			<CardNumber active={active} textColor={textColor} >
				{number}
			</CardNumber>
			<CardType active={active} url={brandLogoUrl} />
		</CardLayout>
	);
};

Card.propTypes = {
	active: PropTypes.bool,
	editable: PropTypes.bool,
	theme: CardTheme.isRequired,
	number: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
};

export default Card;
