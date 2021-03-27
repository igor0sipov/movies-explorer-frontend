import "./Burger.css";

const Burger = ({ loggedIn, isBurgerPressed, onBurgerClick }) => {
  return (
    <label className={`burger ${!loggedIn && 'burger_hidden'}`}>
      <input
        type="checkbox"
        id="checkbox"
        className="burger__checkbox burger__checkbox_hidden"
        onClick={onBurgerClick}
      />
      <div
        className={`burger__stripe ${
          isBurgerPressed && "burger__stripe_pressed"
        }`}
      ></div>
      <div
        className={`burger__stripe ${
          isBurgerPressed && "burger__stripe_pressed"
        }`}
      ></div>
      <div
        className={`burger__stripe ${
          isBurgerPressed && "burger__stripe_pressed"
        }`}
      ></div>
    </label>
  );
};

export default Burger;
