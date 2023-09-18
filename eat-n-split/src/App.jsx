import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function onAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function onSelect(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriends={onAddFriends} />}
        <Button handleClick={() => setShowAddFriend((show) => !show)}>
          {!showAddFriend ? `Add Friend` : `Close`}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill Friend={selectedFriend} onSplit={handleSplitBill} />
      )}
    </div>
  );
}

export default App;

function FriendList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          key={friend.id}
          friend={friend}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
function Friends({ friend, onSelect, selectedFriend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance < 0
          ? `You owe mark ${Math.abs(friend.balance)}$`
          : friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : `You and ${friend.name} are even`}
      </p>
      <Button
        handleClick={() => {
          onSelect(friend);
        }}
      >
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
function FormAddFriend({ onAddFriends }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");
  function AddFriend(e) {
    const id = crypto.randomUUID();
    e.preventDefault();
    if (!friendName || !friendImage) return;
    const newfriend = {
      id: id,
      name: friendName,
      image: `${friendImage}?=${id}`,
      balance: 0,
    };

    onAddFriends(newfriend);

    setFriendName("");
    setFriendImage("https://i.pravatar.cc/48");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={AddFriend}>
      <label> 👩🏼‍🤝‍👩🏼 Friend name </label>
      <input
        type="text"
        name="name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label> 🖼 Image URL</label>
      <input
        type="text"
        name="img"
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />
      <Button handleClick={() => {}}>Add</Button>
    </form>
  );
}
function Button({ children, handleClick }) {
  return (
    <button className="button" onClick={() => handleClick()}>
      {children}
    </button>
  );
}

function FormSplitBill({ Friend, onSplit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const Expenses = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplit(whoIsPaying === "user" ? Expenses : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split the bill with {Friend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="number"
        name="value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ Your Expences</label>
      <input
        type="number"
        name="Expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👬 {Friend.name}'s Expense</label>
      <input type="number" name="whopays" disabled value={Expenses} />
      <label>🤑 Who is paying the bill</label>
      <select
        name="Select"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{Friend.name}</option>
      </select>

      <Button onSubmit={handleSubmit}>Split Bill</Button>
    </form>
  );
}
