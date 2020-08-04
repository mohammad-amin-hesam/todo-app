import React from "react";

import styled from "styled-components";

const TodoOption = (props) => {
  const { className, title } = props;

  return (
    <TodoOptionIcon>
      <i className={className} title={title || ""}></i>
    </TodoOptionIcon>
  );
};

const TodoOptionIcon = styled.div(() => {
  return {
    fontSize: "1.2rem",
    color: "#999",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: 30,
    height: 30,
    "&:hover": {
      backgroundColor: "#99999933",
      color: "#777",
    },
  };
});

export default TodoOption;
