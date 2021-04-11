import "./Profile.css";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = ({ user, history, logout, onProfileEdit, checkValidity }) => {
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    ok: true,
    errorText: "",
  });
  const [inputValues, setInputValues] = useState({
    name: {
      text: user.name,
      isValid: false,
      validationMessage: "",
    },
    email: {
      text: user.email,
      isValid: false,
      validationMessage: "",
    },
  });
  const [buttonText, setButtonText] = useState("Сохранить");
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    return !Object.keys(inputValues).some(
      (input) => inputValues[input].isValid
    );
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [inputValues]);

  const onInputChange = (e) => {
    setSubmitStatus({
      ...submitStatus,
      ok: true,
    });
    setInputValues({
      ...inputValues,
      [e.target.name]: {
        text: e.target.value,
        isValid: checkValidity(e),
        validationMessage: e.target.validationMessage,
      },
    });
  };

  const onEditClick = () => {
    if (isEditPressed) {
      setIsEditPressed(false);
    } else {
      setIsEditPressed(true);
    }
  };

  const onEditProfileSubmit = (e) => {
    e.preventDefault();
    onProfileEdit(
      { name: inputValues.name.text, email: inputValues.email.text },
      setSubmitStatus,
      setIsEditPressed,
      setButtonText
    );
  };

  const signOut = () => {
    logout(history);
  };

  return (
    <main className="profile">
      <h1 className="profile__greeting">{`Привет, ${user.name}!`}</h1>
      <form className="profile__form" onSubmit={onEditProfileSubmit}>
        <label className="profile__label">
          Имя
          <input
            className="profile__input profile__input_type_name focused-box"
            type="text"
            name="name"
            value={inputValues.name.text}
            readOnly={!isEditPressed}
            placeholder="Имя"
            onChange={onInputChange}
            minLength="2"
            maxLength="30"
            required
          />
        </label>
        <span
          className={`profile__input-error ${
            inputValues.name.isValid && "auth__input-error_hidden"
          }`}
        >
          {inputValues.name.validationMessage}
        </span>
        <label className="profile__label">
          Почта
          <input
            className="profile__input profile__input_type_email focused-box"
            type="email"
            name="email"
            value={inputValues.email.text}
            readOnly={!isEditPressed}
            placeholder="Почта"
            onChange={onInputChange}
            minLength="2"
            maxLength="30"
            required
          />
        </label>
        <span
          className={`profile__input-error ${
            inputValues.email.isValid && "auth__input-error_hidden"
          }`}
        >
          {inputValues.email.validationMessage}
        </span>
        <div className="profile__submit-wrapper">
          <span
            className={`profile__submit-error ${
              submitStatus.ok && "profile__submit-error_hidden"
            }`}
          >
            {submitStatus.errorText}
          </span>
          <button
            type="submit"
            className={`profile__submit submit-button ${
              !isEditPressed && "profile__submit_hidden"
            } ${isFormValid && "profile__submit_disabled"} focused-box hovered`}
            disabled={isFormValid}
          >
            {buttonText}
          </button>
        </div>
      </form>

      <div
        className={`profile__buttons ${
          isEditPressed && "profile__buttons_hidden"
        }`}
      >
        <button
          onClick={onEditClick}
          className="profile__edit focused-text hovered"
        >
          Редактировать
        </button>
        <button
          className="profile__signout focused-text hovered"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
};

export default withRouter(Profile);
