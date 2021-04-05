import Auth from "../Auth/Auth";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoggedIn, history, login }) => {
  const [buttonText, setButtonText] = useState("Войти");
  const [submitStatus, setSubmitStatus] = useState({
    ok: true,
    errorText: "",
  });
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

  const onSubmit = (e) => {
    const { email, password } = inputValues;
    e.preventDefault();
    login({ email: email.text, password: password.text })
      .then(() => {
        setSubmitStatus({
          ok: true,
          errorText: "",
        });
        setButtonText("Успешно!");
        setTimeout(() => {
          setLoggedIn(true);
          history.push("/movies");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setButtonText("Ошибка");
        setSubmitStatus({
          ok: false,
          errorText: error.message,
        });
        setTimeout(() => {
          setButtonText("Войти");
        }, 250);
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
      autoComplete: "off",
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
