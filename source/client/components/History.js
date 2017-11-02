// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';

import Island from './Island';
import HistoryGroup from './HistoryGroup';
import {Transaction} from '../types/types';

const HistoryLayout = styled(Island)`
	width: 530px;
	max-height: 622px;
	overflow-y: scroll;
	padding: 0;
	background-color: rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
`;

const HistoryContent = styled.div`
	color: rgba(0, 0, 0, 0.4);
	font-size: 15px;
	line-height: 30px;
	text-transform: uppercase;
`;

const HistoryEmpty = styled.div`
	margin: 10px 0 10px 12px;
`;

const Loading = styled.img`
	width: 42px;
	height: 42px;
	margin: 0 auto;
	padding: 10px;
`;

/**
 * История транзакций
 * @param {Objects} props
 * @returns {JSX}
 */
const History = ({cardTransactions, loading}) => {
	moment.locale('ru');
	const today = moment().format('L');
	const mappedTransactions = cardTransactions.reduce((map, item) => {
		const itemDate = moment(item.time, moment.ISO_8601);
		let key = itemDate.format('L');
		if (itemDate.format('L') === today) {
			key = 'Сегодня';
		}
		const value = map.get(key) || [];
		value.push(item);
		map.set(key, value);

		return map;
	}, new Map());

	let content = <HistoryContent><HistoryEmpty>История операций пуста</HistoryEmpty></HistoryContent>
	if (mappedTransactions.size) {
		content = Array.from(mappedTransactions).map(([title, transactions]) => (
			<HistoryContent key={title}>
				<HistoryGroup title={title} transactions={transactions} />
			</HistoryContent>
		));
	}

	return (
		<HistoryLayout>
			{content}
			{loading ? <Loading src='/assets/loading-bubbles.svg' /> : ''}
		</HistoryLayout>
	);
};

History.propTypes = {
	cardTransactions: PropTypes.arrayOf(Transaction),
	loading: PropTypes.bool.isRequired,
};

export default History;
