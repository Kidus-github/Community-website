export default function ErrorMsg({ error }) {
  return (
    <p className="error">
      <span>⛔</span>
      {error}
    </p>
  );
}
