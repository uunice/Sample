/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import { css } from "@emotion/react";
import { InputState } from "./App";

function Reminder({
  inputState,
  handleInputState,
}: {
  inputState: InputState;
  handleInputState(state: InputState): any;
}) {
  //Method 2 (use defaultState method to condense multiple input-fields)
  // const defaultState ={
  //     event:'',
  //     time:'',
  //     repeat:'',
  //     detail:''
  //   }
  /* Method 1
  const [event, setEvent]=React.useState('');
  const [time, setTime] = React.useState('');
  const [repeat, setRepeat] = React.useState('');
  const [detail, setDetail] = React.useState('');
  */

  return (
    <div>
      <h1>提示</h1>

      <InputField
        className="event"
        placeholder="事項名稱"
        value={inputState.event}
        color="#ff0000"
        // onChange={e=>setInputState({
        //   ...inputState,
        //   event:e
        // })}
        onChange={(e) =>
          handleInputState({
            ...inputState,
            event: e,
          })
        }
      ></InputField>

      <InputField
        className="time"
        placeholder="時間"
        value={inputState.time}
        color="#ff0000"
        onChange={(e) => handleInputState({ ...inputState, time: e })}
      ></InputField>

      <InputField
        className="repeat"
        placeholder="重覆（每日／每星期／每月 / 每年）"
        value={inputState.repeat}
        color="#ff0000"
        onChange={(e) => handleInputState({ ...inputState, repeat: e })}
      ></InputField>

      <InputField
        className="detail"
        placeholder="詳情"
        value={inputState.detail}
        color="#ff0000"
        onChange={(e) => handleInputState({ ...inputState, detail: e })}
      ></InputField>
      <button onClick={() => console.log({ ...inputState })}>+</button>
    </div>
  );
}

export default React.memo(Reminder);
