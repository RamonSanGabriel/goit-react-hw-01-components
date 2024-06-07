import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            width="70"
          />
        </div>
        <div className={css.details}>
          <p className={css.username}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.liFollowers}>
          <span className={css.label}>Followers</span>
          <li>
            <span className={css.quantity}> {stats.followers}</span>
          </li>
        </li>

        <li className={css.liViews}>
          <span className={css.label}>Views</span>
          <li>
            <span className={css.quantity}> {stats.views}</span>
          </li>
        </li>

        <li classNames={css.liLikes}>
          <li>
            <span className={css.label}>Likes</span>
          </li>
          <span className={css.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
