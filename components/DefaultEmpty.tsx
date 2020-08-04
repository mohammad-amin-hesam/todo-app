import React from "react";

import styled from "styled-components";
import { primary } from "../helpers/colors";

const DefaultEmpty = () => {
  return (
    <DefaultEmptyBox>
      <h2>Nothing found</h2>
      <i className="las la-frown"></i>
    </DefaultEmptyBox>
  );
};

const DefaultEmptyBox = styled.div(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 30,
    color: primary,
    h2: {
      fontSize: "1.4rem",
      marginBottom: 5,
    },
    i: {
      fontSize: "3.3rem",
    },
  };
});

export default DefaultEmpty;
