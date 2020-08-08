import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { primary } from "../helpers/colors";
import { fetchTasks } from "../redux/actions/fetchTasks";

const tabs = ["All", "Todo", "Completed"];

const MainBox = (props) => {
  const { empty, children, renderEmpty, title, renderBottom, type } = props;

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state);

  return (
    <>
      <MainBoxContainer>
        <h1>{title}</h1>
        {type === "indexPage" && (
          <ul className="tabContainer">
            {tabs.map((item, index) => {
              const key = `todoListTabItem${index}${item}`;
              return (
                <li
                  onClick={() => dispatch(fetchTasks(item))}
                  key={key}
                  className={`${item === todoList.type ? "activeTabItem" : ""}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        <div className="indexTodoBox">
          {empty ? <>{renderEmpty && renderEmpty(todoList.type)}</> : children}
        </div>
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
      marginTop: 30,
      marginBottom: 10,
    },
    ".tabContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      li: {
        margin: "0 10px",
        color: "#333",
        cursor: "pointer",
      },
      ".activeTabItem": {
        color: primary,
        fontWeight: "bold",
      },
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
