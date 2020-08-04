import React from "react";
import Link from "next/link";

import styled from "styled-components";
import { primary } from "../helpers/colors";

const AddTodoBtn = () => {
  return (
    <Link href="/create_task">
      <AddTodoBtnContainer title="Add Todo">
        <i className="las la-plus"></i>
      </AddTodoBtnContainer>
    </Link>
  );
};

const AddTodoBtnContainer = styled.a(() => {
  return {
    position: "fixed",
    bottom: 30,
    right: 30,
    backgroundColor: primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    i: {
      color: "#fff",
      padding: 10,
      fontSize: "1.9rem",
    },
  };
});

export default AddTodoBtn;
