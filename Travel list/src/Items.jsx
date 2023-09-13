export default function Items({ item, cancel, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name="cancel"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => cancel(item.id)}>🙅‍♂️⨉</button>
    </li>
  );
}
