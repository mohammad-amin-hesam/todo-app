import React from "react";

import styled from "styled-components";

const MainBox = (props) => {
  const { empty, children, renderEmpty, title, renderBottom } = props;

  return (
    <>
      <MainBoxContainer>
        {!empty && <h1>{title}</h1>}
        {empty ? (
          <>{renderEmpty && renderEmpty()}</>
        ) : (
          <div className="indexTodoBox">{children}</div>
        )}
        {renderBottom && renderBottom()}
      </MainBoxContainer>
    </>
  );
};

const MainBoxContainer = styled.main(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    h1: {
      fontSize: "1.9rem",
      color: "#333",
      padding: "0 30px",
    },
    ".indexTodoBox": {
      background: "#fff",
      padding: 30,
      width: "100%",
      maxWidth: 500,
      margin: 30,
      borderRadius: 4,
      boxShadow: "2px 2px 5px 1px #999",
    },
  };
});

export default MainBox;
