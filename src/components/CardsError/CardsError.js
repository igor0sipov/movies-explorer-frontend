import "./CardsError.css";

const CardsError = ({ heading, text }) => {
  return (
    <div className="error">
      <h2 className="error__heading">{heading}</h2>
      <p className="error__text">{text}</p>
    </div>
  );
};

export default CardsError;
