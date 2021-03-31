import "./Profile.css";
import { useState } from "react";

const Profile = ({ user }) => {
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

  return (
    <main className="profile">
      <h1 className="profile__greeting">{`Привет, ${user.name}!`}</h1>
      <form className="profile__form" onSubmit={onEditProfileSubmit}>
        <label className="profile__label">
          Имя
          <input
            className="profile__input profile__input_type_name"
            type="text"
            defaultValue={user.name}
            readOnly={!isEditPressed}
            placeholder="Имя"
          />
        </label>
        <label className="profile__label">
          Почта
          <input
            className="profile__input profile__input_type_email"
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
          className={`profile__submit ${
            !isEditPressed && "profile__submit_hidden"
          }`}
        >
          Сохранить
        </button>
      </form>

      <div
        className={`profile__buttons ${
          isEditPressed && "profile__buttons_hidden"
        }`}
      >
        <button onClick={onEditClick} className="profile__edit">
          Редактировать
        </button>
        <button className="profile__signout">Выйти из аккаунта</button>
      </div>
    </main>
  );
};

export default Profile;
