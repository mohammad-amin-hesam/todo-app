import React from "react";

import styled from "styled-components";
import { danger } from "../helpers/colors";

const Input = (props) => {
  const { onBlur, onChange, value, err, hasErr, id, label, name } = props;

  return (
    <MainTaskInput hasErr={hasErr}>
      <label htmlFor={id}>{hasErr ? err : label}</label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </MainTaskInput>
  );
};

const MainTaskInput = styled.div((props) => {
  const { hasErr } = props;

  return {
    marginBottom: 15,
    label: {
      width: "100%",
      fontSize: ".85rem",
      color: hasErr ? danger : "#555",
    },
    input: {
      width: "100%",
      height: 40,
      borderRadius: 4,
      border: `1px solid ${hasErr ? danger : "#99999944"}`,
      color: "#444",
      fontSize: ".9rem",
      padding: "0 15px",
    },
  };
});

export default Input;
