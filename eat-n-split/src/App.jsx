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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
function Friends({ friend }) {
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
      <Button>Select</Button>
    </li>
  );
}
function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="name">👩🏼‍🤝‍👩🏼 Friend name </label>
      <input type="text" name="name" />

      <label htmlFor="img">🖼 Image URL</label>
      <input type="text" name="img" />
      <Button>Add</Button>
    </form>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split the bill with X</h2>
      <label htmlFor="value">💰 Bill Value</label>
      <input type="number" name="value" />
      <label htmlFor="value">🧍‍♂️ Your Expences</label>
      <input type="number" name="value" />
      <label htmlFor="value">👬 X's Expense</label>
      <input type="number" name="value" disabled />
      <label htmlFor="select">🤑 Who is paying the bill</label>
      <select name="Select" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
