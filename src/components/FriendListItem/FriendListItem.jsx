import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  const dynamicClassName = isOnline ? css.online : css.offline;
  return (
    <li className={css.friendListItem}>
      <span className={dynamicClassName}></span>
      <img src={avatar} alt="" width="70" />
      <p>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
