import "./Profile.css";
import { withRouter } from "react-router-dom";
import { useState } from "react";

const Profile = ({ user, history, logout }) => {
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const onEditClick = () => {
    if (isEditPressed) {
      setIsEditPressed(false);
    } else {
      setIsEditPressed(true);
    }
  };

  const onEditProfileSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
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
            defaultValue={user.name}
            readOnly={!isEditPressed}
            placeholder="Имя"
          />
        </label>
        <label className="profile__label">
          Почта
          <input
            className="profile__input profile__input_type_email focused-box"
            type="text"
            defaultValue={user.email}
            readOnly={!isEditPressed}
            placeholder="Почта"
          />
        </label>
        <span
          className={`profile__submit-error ${
            !isSubmited && "profile__submit-error_hidden"
          }`}
        >
          При обновлении профиля произошла ошибка.
        </span>
        <button
          type="submit"
          className={`profile__submit submit-button ${
            !isEditPressed && "profile__submit_hidden"
          } focused-box hovered`}
        >
          Сохранить
        </button>
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
