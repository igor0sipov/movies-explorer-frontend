import "./Auth.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Auth = ({
  greeting,
  inputs,
  onInputChange,
  question,
  linkText,
  buttonText,
  direction,
  onSubmit,
  submitStatus,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const validationState = inputs.map((input) => {
      if (!input.isValid) {
        return false;
      }
      return true;
    });
    validationState.includes(false)
      ? setIsFormValid(false)
      : setIsFormValid(true);
  }, [inputs]);
  return (
    <section className="auth">
      <h1 className="auth__greeting">{greeting}</h1>
      <form className="auth__form" onSubmit={onSubmit} noValidate>
        {inputs.map((input, index) => {
          return (
            <label className="auth__label" key={index}>
              <p className="auth__label-text">{input.label}</p>
              <input
                type={input.type}
                className={`auth__input ${
                  !input.isValid && "auth__input_invalid"
                }`}
                name={input.name}
                onChange={onInputChange}
                placeholder={input.placeholder}
                value={input.value}
                minLength={input.min}
                maxLength={input.max}
                required={input.required}
                autoComplete={input.autocomplete}
              />
              <span className="auth__input-error">
                {input.validationMessage}
              </span>
            </label>
          );
        })}
        <span
          className={`auth__submit-error ${
            submitStatus.ok && "auth__submit-error_hidden"
          }`}
        >
          {submitStatus.errorText}
        </span>
        <button
          className={`auth__submit submit-button focused-box hovered ${
            !isFormValid && "auth__submit_disabled"
          }`}
          type="submit"
          disabled={!isFormValid}
        >
          {buttonText}
        </button>
      </form>
      <div className="auth__redirect">
        <p className="auth__question">{question}</p>
        <Link className="auth__link focused-text hovered" to={direction}>
          {linkText}
        </Link>
      </div>
    </section>
  );
};

export default Auth;
