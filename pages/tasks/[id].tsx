import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import MainBox from "../../components/MainBox";
import TaskForm from "../../components/TaskForm";
import Router from "next/router";
import { fetchTask } from "../../redux/actions/fetchTasks";
import { editTask } from "../../redux/actions/editTask";

const EditTask = ({ id }) => {
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state);

  const handleSubmit = (data) => {
    dispatch(editTask(id, data));
    Router.push("/");
  };

  useEffect(() => {
    dispatch(fetchTask(id));
  }, []);

  return (
    <>
      <Head>
        <title>Edit Task |‌ Todo App</title>
      </Head>
      <MainBox title={"Edit Task"}>
        <TaskForm
          onSubmit={handleSubmit}
          title={task.title}
          description={task.description}
        />
      </MainBox>
    </>
  );
};

EditTask.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  return { id };
};

export default EditTask;
