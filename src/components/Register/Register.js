import Auth from "../Auth/Auth";
import "./Register.css";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const Register = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    props.history.push("/signin");
  };

  const [inputValues, setInputValues] = useState({
    username: {
      text: "",
      isValid: true,
      validationMessage: "",
    },
    email: {
      text: "",
      isValid: true,
      validationMessage: "",
    },
    password: {
      text: "",
      isValid: true,
      validationMessage: "",
    },
  });

  const onInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: {
        text: e.target.value,
        isValid: e.target.validity.valid,
        validationMessage: e.target.validationMessage,
      },
    });
  };

  const inputs = [
    {
      name: "username",
      type: "text",
      label: "Имя",
      placeholder: "Введите имя",
      value: inputValues.username.text,
      min: 2,
      max: 30,
      required: true,
      isValid: inputValues.username.isValid,
      validationMessage: inputValues.username.validationMessage,
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
      placeholder: "Введите e-mail",
      value: inputValues.email.text,
      min: 2,
      max: 30,
      required: true,
      isValid: inputValues.email.isValid,
      validationMessage: inputValues.email.validationMessage,
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "Введите пароль",
      value: inputValues.password.text,
      min: 8,
      max: 30,
      required: true,
      isValid: inputValues.password.isValid,
      validationMessage: inputValues.password.validationMessage,
    },
  ];

  return (
    <main className="register">
      <Auth
        greeting={"Добро пожаловать!"}
        inputs={inputs}
        onInputChange={onInputChange}
        question="Уже зарегестрированы?"
        buttonText="Зарегистрироваться"
        linkText="Войти"
        direction="/signin"
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default withRouter(Register);
