import React from "react";
import { getSingle } from "../utils";

export default class ClassComponentExample extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    console.log(
      "[ClassComponentExample] newData recomputing in componentDidMount"
    );
  }
  componentDidUpdate(prevProps) {
    console.log(
      "[ClassComponentExample] newData recomputing in componentDidUpdate"
    );
  }

  render() {
    return (
      <pre>
        ClassComponetExample
        {JSON.stringify(this.state.data, null, 2)}
      </pre>
    );
  }
}
