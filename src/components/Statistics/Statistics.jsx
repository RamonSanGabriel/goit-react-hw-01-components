import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ data }) => {
  return (
    <ul className={css.statisticsTitle}>
      <div>
        <h2>Upload stats</h2>
      </div>
      <div>
        {data.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </div>
    </ul>
  );
};
Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
