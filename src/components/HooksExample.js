import React, { useState, useEffect, useMemo } from "react";
import { getSingle } from "../utils";

export default function HooksExample({ id }) {
  const [data, setData] = useState();
  const [dummyData, setDummyData] = useState(0);

  useEffect(() => {
    console.log("[HooksExample] data recomputing in useEffect");
    const data = getSingle(id);
    setData(data);
  }, [id]);

  useEffect(() => {
    console.log("[HooksExample] dummyData recomputing in useEffect");
  }, [dummyData]);

  const memoData = useMemo(() => {
    console.log("Called memoData useMemo callback");
    return getSingle(id);
  }, [id]);

  return (
    <React.Fragment>
      <pre>
        HooksExample
        {JSON.stringify({ data }, null, 2)}
        {JSON.stringify({ memoData }, null, 2)}
      </pre>
      <button onClick={() => setDummyData(dummyData + 1)}>
        {" "}
        Zmień dummy data
      </button>
    </React.Fragment>
  );
}
