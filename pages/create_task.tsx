import React from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import MainBox from "../components/MainBox";
import TaskForm from "../components/TaskForm";
import { createTask } from "../redux/actions/createTask";

const CreateTask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => dispatch(createTask(data));

  return (
    <>
      <Head>
        <title>Create Task |‌ Todo App</title>
      </Head>
      <MainBox title={"Create Task"}>
        <TaskForm onSubmit={handleSubmit} />
      </MainBox>
    </>
  );
};

export default CreateTask;
