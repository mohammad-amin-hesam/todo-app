import React from "react";
import Head from "next/head";
import TodoList from "../components/TodoList";
import AddTodoBtn from "../components/AddTodoBtn";
import MainBox from "../components/MainBox";
import DefaultEmpty from "../components/DefaultEmpty";

const Index = () => {
  return (
    <>
      <Head>
        <title>Todo List App</title>
      </Head>
      <MainBox
        renderEmpty={() => <DefaultEmpty />}
        renderBottom={() => <AddTodoBtn />}
        title={"Todo List"}
      >
        <TodoList />
      </MainBox>
    </>
  );
};

export default Index;
