import React from "react";
import Link from "next/link";

import styled from "styled-components";
import TodoOption from "./TodoOption";
import { danger } from "../helpers/colors";

const TodoItem = (props) => {
  const { title, description, read, id, toggleRead, deleteItem } = props;

  return (
    <TodoListItem read={read}>
      {!read && <i className="las la-exclamation-circle unReadMark"></i>}
      <div className="todoListContent">
        <h2>
          <Link href="/tasks/[id]" as={`/tasks/${id}`}>
            <a>{title}</a>
          </Link>
        </h2>
        <p>
          <Link href="/tasks/[id]" as={`/tasks/${id}`}>
            <a>{description}</a>
          </Link>
        </p>
      </div>
      <div className="todoListOptions">
        <TodoOption
          onClick={deleteItem}
          className="las la-trash"
          title="Delete task"
        />
        {read ? (
          <TodoOption
            onClick={toggleRead}
            className="las la-envelope-open"
            title="Mark as unread"
          />
        ) : (
          <TodoOption
            onClick={toggleRead}
            className="las la-envelope"
            title="Mark as read"
          />
        )}
      </div>
    </TodoListItem>
  );
};

const TodoListItem = styled.li((props) => {
  const { read } = props;

  return {
    borderBottom: "1px solid #99999933",
    position: "relative",
    padding: "15px 0",
    color: "#555",
    fontSize: ".9rem",
    fontWeight: read ? 100 : "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:last-of-type": {
      borderWidth: 0,
    },
    ".unReadMark": {
      color: danger,
      position: "absolute",
      top: 5,
      right: 5,
      fontSize: ".85rem",
    },
    ".todoListContent": {
      h2: {
        fontWeight: read ? 500 : "bold",
      },
      "h2, p": {
        a: {
          color: "#555",
        },
      },
    },
  };
});

export default TodoItem;
