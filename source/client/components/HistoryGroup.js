// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';

import {Transaction} from '../types/types';

const HistoryTitle = styled.div`
	padding-left: 12px;
	color: rgba(0, 0, 0, 0.4);
	font-size: 15px;
	line-height: 30px;
	text-transform: uppercase;
`;

const HistoryItem = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 74px;
	font-size: 15px;
	white-space: nowrap;
	min-height: 74px;

	&:nth-child(even) {
		background-color: #fff;
	}

	&:nth-child(odd) {
		background-color: rgba(255, 255, 255, 0.72);
	}
`;

const HistoryItemIcon = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background-color: #159761;
	background-image: url(${({bankSmLogoUrl}) => bankSmLogoUrl});
	background-size: contain;
	background-repeat: no-repeat;
`;

const HistoryItemTitle = styled.div`
	width: 290px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const HistoryItemTime = styled.div`
	width: 50px;
`;

const HistoryItemSum = styled.div`
	width: 50px;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: bold;
`;

/**
 * История транзакций с заголовком
 * @param {Object} props
 * @returns {JSX}
 */
const HistoryGroup = ({transactions, title}) => (
	<div>
		<HistoryTitle>{title}</HistoryTitle>
		{transactions.map((item) => (
			<HistoryItem key={item.id}>
				<HistoryItemIcon bankSmLogoUrl={item.theme.bankSmLogoUrl} />
				<HistoryItemTitle>
					{item.description}
				</HistoryItemTitle>
				<HistoryItemTime>
					{moment(item.time, moment.ISO_8601).format('HH:mm')}
				</HistoryItemTime>
				<HistoryItemSum>
					{`${item.sum} ₽`}
				</HistoryItemSum>
			</HistoryItem>
		))}
	</div>
);

HistoryGroup.propTypes = {
	transactions: PropTypes.arrayOf(Transaction).isRequired,
	title: PropTypes.string,
};

export default HistoryGroup;
