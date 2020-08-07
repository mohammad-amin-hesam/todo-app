import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import TodoList from "../components/TodoList";
import AddTodoBtn from "../components/AddTodoBtn";
import MainBox from "../components/MainBox";
import DefaultEmpty from "../components/DefaultEmpty";
import { fetchTasks } from "../redux/actions/fetchTasks";

const Index = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Head>
        <title>Todo List App</title>
      </Head>
      <MainBox
        renderEmpty={() => <DefaultEmpty />}
        renderBottom={() => <AddTodoBtn />}
        title={"Todo List"}
        empty={todoList.length === 0}
      >
        <TodoList />
      </MainBox>
    </>
  );
};

export default Index;
