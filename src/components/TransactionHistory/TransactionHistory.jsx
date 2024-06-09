import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHeader}>
        <tr className={css.tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={css.tableRow} key={id}>
            <td className={css.tableData}>{type}</td>
            <td className={css.tableData}>{amount}</td>
            <td className={css.tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
