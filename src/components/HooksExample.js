import React, { useState, useEffect } from "react";
import { getSingle } from "../utils";

export default function HooksExample({ id }) {
  const [data, setData] = useState();

  useEffect(() => {
    const data = getSingle(id);
    setData(data);
  }, [id]);

  return (
    <React.Fragment>
      <pre>
        HooksExample
        {JSON.stringify({ data }, null, 2)}
      </pre>
    </React.Fragment>
  );
}
