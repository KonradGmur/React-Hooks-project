import React from "react";
import "./styles.css";

import ClassComponentExample from "./components/ClassComponentExample";
import HooksExample from "./components/HooksExample";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ClassComponentExample id={}/>
      <HooksExample id={} />
    </div>
  );
}
