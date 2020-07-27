import React, { useState } from "react";
import "./styles.css";

import ClassComponentExample from "./components/ClassComponentExample";
import HooksExample from "./components/HooksExample";

export default function App() {
  const [selectegId, setSelectedId] = useState(1);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={() => setSelectedId(selectegId + 1)}>Zmień ID</button>

      <ClassComponentExample id={selectegId} />
      <HooksExample id={selectegId} />
    </div>
  );
}
