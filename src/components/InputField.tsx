/** @jsxImportSource @emotion/react */

import React from "react";
import { css, SerializedStyles } from "@emotion/react";

function InputField(props: {
  className?: string;
  placeholder: string;
  value: string;
  color?: string;
  onChange: (text: string) => void;
}) {
  return (
    <div
      css={css`
        background-color: #fff;
        padding: 4px;
        margin-bottom: 10px;
        border-radius: 100px;
        color: ${props.color ?? "#000"};
        h1 {
          background-color: #fff;
          border-style: outset;
        }
        label {
          display: flex;
          align-items: center;

          input {
            border: none;
            padding: 8px;
            background-color: transparent;
          }
        }
      `}
      className={props.className}
    >
      <label>
        {props.placeholder}:{""}
        <input
          value={props.value}
          onChange={(event) => {
            props.onChange(event.currentTarget.value);
          }}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}

export default InputField;
