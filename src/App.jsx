import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendsList from "./components/FriendList/FriendList.jsx";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
// import { useState } from "react";
