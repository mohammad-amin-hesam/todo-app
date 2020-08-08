import React, { Fragment } from "react";
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

const inputs = [
  {
    label: "Title",
    name: "title",
  },
  {
    label: "Description",
    name: "description",
  },
];

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
      enableReinitialize={true}
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

        const getErr = (name) => errors[name] && touched[name];

        return (
          <TaskFormContainer onSubmit={handleSubmit} autoComplete="off">
            {renderOptions && renderOptions()}
            {inputs.map((item, index) => {
              const key = `TaskFormInputListItem${item.name}${index}`;
              return (
                <Fragment key={key}>
                  <Input
                    label={item.label}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[item.name]}
                    err={errors[item.name]}
                    hasErr={getErr(item.name)}
                    id={key}
                    name={item.name}
                  />
                </Fragment>
              );
            })}
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
