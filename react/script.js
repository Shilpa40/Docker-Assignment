function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount((v) => v + 1), []);
  return <button onClick={increment}>Current value: {count}</button>;
}

function App() {
  return (
    <>
      <h2>IncrementApp&trade; in React:</h2>
      <Counter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
