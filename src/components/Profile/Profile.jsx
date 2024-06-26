import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} width="70" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}> {stats.followers}</span>
          </li>

          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}> {stats.views}</span>
          </li>

          <li className={css.liItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
