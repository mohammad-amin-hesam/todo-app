import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

import styled from "styled-components";
import { primary } from "../helpers/colors";

const validateObj = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title most be between 3 and 50")
    .max(50, "Title most be between 3 and 50")
    .required("Title is required"),
  description: Yup.string()
    .min(10, "Title most be between 10 and 200")
    .max(200, "Title most be between 10 and 200")
    .required("Description is required"),
});

const TaskForm = (props) => {
  const { onSubmit, renderOptions, title, description } = props;

  const initialValues = {
    title: title || "",
    description: description || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validateObj}
    >
      {(formProps) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        } = formProps;

        const titleErr = errors.title && touched.title;
        const descriptionErr = errors.description && touched.description;

        return (
          <TaskFormContainer onSubmit={handleSubmit} autoComplete="off">
            {renderOptions && renderOptions()}
            <Input
              label={"Title"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              err={errors.title}
              hasErr={titleErr}
              id={"addTaskInputTitle"}
              name="title"
            />
            <Input
              label={"Description"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              err={errors.description}
              hasErr={descriptionErr}
              id={"addTaskInputDescription"}
              name="description"
            />
            <div className="taskFormButtonBox">
              <button type="submit">Submit</button>
            </div>
          </TaskFormContainer>
        );
      }}
    </Formik>
  );
};

const TaskFormContainer = styled.form(() => {
  return {
    ".taskFormButtonBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      button: {
        background: primary,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        height: 40,
        width: 130,
      },
    },
  };
});

export default TaskForm;
