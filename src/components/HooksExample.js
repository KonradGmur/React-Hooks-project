import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getSingle, useSingleHook } from "../utils";

export default function HooksExample({ id }) {
  const [data, setData] = useState();
  const [dummyData, setDummyData] = useState(0);
  const newData = useSingleHook(id);

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

  const handleClick = useCallback(() => {
    setDummyData(dummyData + 1);
  }, [dummyData]);

  return (
    <React.Fragment>
      <pre>
        HooksExample
        {JSON.stringify({ data }, null, 2)}
        {JSON.stringify({ memoData }, null, 2)}
        {JSON.stringify({ newData }, null, 2)}
      </pre>
      <Button onClick={handleClick}>Zmień dummy data</Button>
    </React.Fragment>
  );
}

const Button = React.memo(({ onClick, children }) => {
  console.log({ onClick });
  return <button onclick={onClick}>{children}</button>;
});
