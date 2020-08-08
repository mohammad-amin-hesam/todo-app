import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { trunc } from "../helpers/props";
import { editTask } from "../redux/actions/editTask";
import { deleteTask } from "../redux/actions/deleteTask";

const TodoList = () => {
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <TodoListContainer>
      {todoList.list.map((item, index) => {
        const key = `todoListItem-${item.id}-${index}`;
        return (
          <TodoItem
            key={key}
            id={item.id}
            title={trunc(item.title, 30)}
            description={trunc(item.description, 50)}
            read={item.read}
            toggleRead={() => dispatch(editTask(item.id, { read: !item.read }))}
            deleteItem={() => dispatch(deleteTask(item.id))}
          />
        );
      })}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.ul(() => ({}));

export default TodoList;
