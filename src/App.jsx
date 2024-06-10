import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(() => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
