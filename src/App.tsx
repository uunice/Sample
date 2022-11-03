/** @jsxImportSource @emotion/react */

import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import { css } from "@emotion/react";
import Reminder from "./Reminder";

export type InputState = {
  event: string;
  time: string;
  repeat: string;
  detail: string;
};

function App() {
  const [username, setUsername] = React.useState("");
  const [show, setShow] = useState(true);

  const defaultState: InputState = {
    event: "hi",
    time: "1:00",
    repeat: "",
    detail: "",
  };
  const [inputState, setInputState] = useState<InputState>(defaultState);
  let handleInputState = useCallback((state: InputState) => {
    setInputState(state);
  }, []);
  return (
    <div className="App">
      <h1>hi</h1>
      {show ? (
        <Reminder inputState={inputState} handleInputState={handleInputState} />
      ) : null}
      <button onClick={() => setShow(!show)}>Show</button>
    </div>
  );
}

export default App;
