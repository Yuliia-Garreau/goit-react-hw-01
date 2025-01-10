import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.item_name}>Followers</span>
          <span className={css.item_number}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_name}>Views</span>
          <span className={css.item_number}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.item_name}>Likes</span>
          <span className={css.item_number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
