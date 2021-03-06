import Auth from "../Auth/Auth";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

const Login = ({ history, onLoginSubmit, checkValidity }) => {
  const [buttonText, setButtonText] = useState("Войти");
  const [submitStatus, setSubmitStatus] = useState({
    ok: true,
    errorText: "",
  });
  const [inputValues, setInputValues] = useState({
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
    setInputValues({
      ...inputValues,
      [e.target.name]: {
        text: e.target.value,
        isValid: checkValidity(e),
        validationMessage: e.target.validationMessage,
      },
    });
  };

  const onSubmit = (e) => {
    const { email, password } = inputValues;
    e.preventDefault();
    onLoginSubmit({ email, password }, setSubmitStatus, setButtonText, history);
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
      autoComplete: "off",
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
    <main className="login">
      <Auth
        greeting={"Рады видеть!"}
        inputs={inputs}
        onInputChange={onInputChange}
        question="Еще не зарегестрированы?"
        buttonText={buttonText}
        linkText="Регистрация"
        direction="/signup"
        onSubmit={onSubmit}
        submitStatus={submitStatus}
      />
    </main>
  );
};

export default withRouter(Login);
