import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function Friendlist({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
