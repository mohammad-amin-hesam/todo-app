module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+rcQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/MainBox.tsx
var MainBox = __webpack_require__("pOV+");

// EXTERNAL MODULE: ./components/TaskForm.tsx + 1 modules
var TaskForm = __webpack_require__("UMmx");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./redux/actions/createTask.tsx

const createTask = data => (dispatch, getState, {
  Api
}) => {
  const api = new Api({
    dispatch,
    getState
  });
  api.Post(data);
  router_default.a.push("/");
};
// CONCATENATED MODULE: ./pages/create_task.tsx
var __jsx = external_react_default.a.createElement;







const CreateTask = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleSubmit = data => dispatch(createTask(data));

  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("title", null, "Create Task |\u200C Todo App")), __jsx(MainBox["a" /* default */], {
    title: "Create Task"
  }, __jsx(TaskForm["a" /* default */], {
    onSubmit: handleSubmit
  })));
};

/* harmony default export */ var create_task = __webpack_exports__["default"] = (CreateTask);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+rcQ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "O4e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchTask; });
const fetchTasks = (type = "All") => (dispatch, getState, {
  Api
}) => {
  const api = new Api({
    dispatch,
    getState
  });
  api.GetAll(type);
};
const fetchTask = id => (dispatch, getState, {
  Api
}) => {
  const api = new Api({
    dispatch,
    getState
  });
  api.Get(id);
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "UMmx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./helpers/colors.tsx
var colors = __webpack_require__("rDx7");

// CONCATENATED MODULE: ./components/Input.tsx
var __jsx = external_react_default.a.createElement;




const Input = props => {
  const {
    onBlur,
    onChange,
    value,
    err,
    hasErr,
    id,
    label,
    name
  } = props;
  return __jsx(MainTaskInput, {
    hasErr: hasErr
  }, __jsx("label", {
    htmlFor: id
  }, hasErr ? err : label), __jsx("input", {
    type: "text",
    id: id,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    value: value
  }));
};

const MainTaskInput = external_styled_components_default.a.div(props => {
  const {
    hasErr
  } = props;
  return {
    marginBottom: 15,
    label: {
      width: "100%",
      fontSize: ".85rem",
      color: hasErr ? colors["a" /* danger */] : "#555"
    },
    input: {
      width: "100%",
      height: 40,
      borderRadius: 4,
      border: `1px solid ${hasErr ? colors["a" /* danger */] : "#99999944"}`,
      color: "#444",
      fontSize: ".9rem",
      padding: "0 15px"
    }
  };
});
/* harmony default export */ var components_Input = (Input);
// CONCATENATED MODULE: ./components/TaskForm.tsx
var TaskForm_jsx = external_react_default.a.createElement;






const validateObj = external_yup_["object"]().shape({
  title: external_yup_["string"]().min(3, "Title most be between 3 and 50").max(50, "Title most be between 3 and 50").required("Title is required"),
  description: external_yup_["string"]().min(10, "Title most be between 10 and 200").max(200, "Title most be between 10 and 200").required("Description is required")
});
const inputs = [{
  label: "Title",
  name: "title"
}, {
  label: "Description",
  name: "description"
}];

const TaskForm = props => {
  const {
    onSubmit,
    renderOptions,
    title,
    description
  } = props;
  const initialValues = {
    title: title || "",
    description: description || ""
  };
  return TaskForm_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validateObj,
    enableReinitialize: true
  }, formProps => {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    } = formProps;

    const getErr = name => errors[name] && touched[name];

    return TaskForm_jsx(TaskFormContainer, {
      onSubmit: handleSubmit,
      autoComplete: "off"
    }, renderOptions && renderOptions(), inputs.map((item, index) => {
      const key = `TaskFormInputListItem${item.name}${index}`;
      return TaskForm_jsx(external_react_["Fragment"], {
        key: key
      }, TaskForm_jsx(components_Input, {
        label: item.label,
        onChange: handleChange,
        onBlur: handleBlur,
        value: values[item.name],
        err: errors[item.name],
        hasErr: getErr(item.name),
        id: key,
        name: item.name
      }));
    }), TaskForm_jsx("div", {
      className: "taskFormButtonBox"
    }, TaskForm_jsx("button", {
      type: "submit"
    }, "Submit")));
  });
};

const TaskFormContainer = external_styled_components_default.a.form(() => {
  return {
    ".taskFormButtonBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      button: {
        background: colors["b" /* primary */],
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        height: 40,
        width: 130
      }
    }
  };
});
/* harmony default export */ var components_TaskForm = __webpack_exports__["a"] = (TaskForm);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "pOV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rDx7");
/* harmony import */ var _redux_actions_fetchTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("O4e5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const tabs = ["All", "Todo", "Completed"];

const MainBox = props => {
  const {
    empty,
    children,
    renderEmpty,
    title,
    renderBottom,
    type
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    todoList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MainBoxContainer, null, __jsx("h1", null, title), type === "indexPage" && __jsx("ul", {
    className: "tabContainer"
  }, tabs.map((item, index) => {
    const key = `todoListTabItem${index}${item}`;
    return __jsx("li", {
      onClick: () => dispatch(Object(_redux_actions_fetchTasks__WEBPACK_IMPORTED_MODULE_4__[/* fetchTasks */ "b"])(item)),
      key: key,
      className: `${item === todoList.type ? "activeTabItem" : ""}`
    }, item);
  })), __jsx("div", {
    className: "indexTodoBox"
  }, empty ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderEmpty && renderEmpty(todoList.type)) : children), renderBottom && renderBottom()));
};

const MainBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: "100vh",
    h1: {
      fontSize: "1.9rem",
      color: "#333",
      padding: "0 30px",
      marginTop: 30,
      marginBottom: 10
    },
    ".tabContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      li: {
        margin: "0 10px",
        color: "#333",
        cursor: "pointer"
      },
      ".activeTabItem": {
        color: _helpers_colors__WEBPACK_IMPORTED_MODULE_3__[/* primary */ "b"],
        fontWeight: "bold"
      }
    },
    ".indexTodoBox": {
      background: "#fff",
      padding: 30,
      width: "100%",
      maxWidth: 500,
      margin: 30,
      borderRadius: 4,
      boxShadow: "2px 2px 5px 1px #999"
    }
  };
});
/* harmony default export */ __webpack_exports__["a"] = (MainBox);

/***/ }),

/***/ "rDx7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return danger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return primary; });
const danger = "#d84f4d";
const primary = "#437db0";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });