import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const CardEditIcon = styled.div`
	width: 24px;
	height: 24px;
	position: absolute;
	top: -12px;
	right: -12px;
	background-image: url('/assets/cards-delete.svg');
	cursor: pointer;
	display: ${({editable}) => (editable ? 'block' : 'none')}
`;

/**
 * Иконка редактирования
 * @param {Object} props
 */
const CardEdit = ({onClick, editable}) => (
	<CardEditIcon onClick={onClick} editable={editable} />
);

CardEdit.propTypes = {
	onClick: PropTypes.func.isRequired,
	editable: PropTypes.bool,
};

export default CardEdit;
