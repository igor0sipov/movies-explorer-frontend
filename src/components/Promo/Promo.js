import "./Promo.css";
import planetPicPath from "../../images/about-planet-logo.png";

const Promo = () => {
  return (
    <section className="promo main-sizer">
      <img className="promo__planet-picture" src={planetPicPath} alt="#" />
      <div className="promo__content">
        <h1 className="promo__heading">
          {"Учебный проект студента факультета Веб-разработки."}
        </h1>
        <p className="promo__subheading">
          {
            "Листайте ниже, чтобы узнать больше про этот проект и его создателя."
          }
        </p>

        <a href="#about-project" className="promo__button focused-text">
          Узнать больше
        </a>
      </div>
    </section>
  );
};

export default Promo;
