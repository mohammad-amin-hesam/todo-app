import React from "react";
import Head from "next/head";
import MainBox from "../components/MainBox";
import TaskForm from "../components/TaskForm";

const CreateTask = () => {
  return (
    <>
      <Head>
        <title>Create Task |‌ Todo App</title>
      </Head>
      <MainBox title={"Create Task"}>
        <TaskForm />
      </MainBox>
    </>
  );
};

export default CreateTask;
