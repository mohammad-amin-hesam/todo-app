import React from "react";
import Head from "next/head";
import MainBox from "../../components/MainBox";
import TaskForm from "../../components/TaskForm";

const EditTask = () => {
  return (
    <>
      <Head>
        <title>Edit Task |‌ Todo App</title>
      </Head>
      <MainBox title={"Edit Task"}>
        <TaskForm />
      </MainBox>
    </>
  );
};

export default EditTask;
