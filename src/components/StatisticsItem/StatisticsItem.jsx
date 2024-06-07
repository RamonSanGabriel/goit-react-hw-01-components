import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li>
      <span> {label}</span>
      <span> {percentage}%</span>
    </li>
  );
};
StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
