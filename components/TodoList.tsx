import React from "react";
import TodoItem from "./TodoItem";

import styled from "styled-components";

const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
        read
      />
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
      />
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
      />
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
        read
      />
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
        read
      />
      <TodoItem
        id={"lksjdf332"}
        title="Todo Item 1"
        description="Lorem Ipsum is a test description :)"
        read
      />
    </TodoListContainer>
  );
};

const TodoListContainer = styled.ul((props) => {
  return {};
});

export default TodoList;
