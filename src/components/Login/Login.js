import Auth from "../Auth/Auth";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoggedIn, history }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    history.push("/movies");
  };

  const [inputValues, setInputValues] = useState({
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
    <main className="login">
      <Auth
        greeting={"Рады видеть!"}
        inputs={inputs}
        onInputChange={onInputChange}
        question="Еще не зарегестрированы?"
        buttonText="Войти"
        linkText="Регистрация"
        direction="/signup"
        onSubmit={onSubmit}
      />
    </main>
  );
};

export default withRouter(Login);
