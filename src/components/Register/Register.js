import Auth from "../Auth/Auth";
import "./Register.css";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const Register = ({ history, onRegisterSubmit }) => {
  const [buttonText, setButtonText] = useState("Зарегистрироваться");
  const [submitStatus, setSubmitStatus] = useState({
    ok: true,
    errorText: "",
  });

  const onSubmit = (e) => {
    const { name, password, email } = inputValues;
    e.preventDefault();
    onRegisterSubmit(
      { name, password, email },
      setSubmitStatus,
      setButtonText,
      history
    );
  };

  const [inputValues, setInputValues] = useState({
    name: {
      text: "",
      isValid: false,
      validationMessage: "",
    },
    email: {
      text: "",
      isValid: false,
      validationMessage: "",
    },
    password: {
      text: "",
      isValid: false,
      validationMessage: "",
    },
  });

  const onInputChange = (e) => {
    setSubmitStatus({
      ...submitStatus,
      ok: true,
    });
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
      name: "name",
      type: "text",
      label: "Имя",
      placeholder: "Введите имя",
      value: inputValues.name.text,
      min: 2,
      max: 30,
      required: true,
      isValid: inputValues.name.isValid,
      validationMessage: inputValues.name.validationMessage,
      autocomplete: "off",
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
      autocomplete: "off",
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
      autocomplete: "off",
    },
  ];

  return (
    <main className="register">
      <Auth
        greeting={"Добро пожаловать!"}
        inputs={inputs}
        onInputChange={onInputChange}
        question="Уже зарегестрированы?"
        buttonText={buttonText}
        linkText="Войти"
        direction="/signin"
        onSubmit={onSubmit}
        submitStatus={submitStatus}
      />
    </main>
  );
};

export default withRouter(Register);
