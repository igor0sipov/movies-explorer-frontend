import "./Promo.css";
import Header from "../Header/Header";
import planetPicPath from "../../images/about-planet-logo.png";

const Promo = () => {
  return (
    <>
      <Header promo={true} />
      <section className="promo sizer">
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

          <button className="promo__button button">Узнать больше</button>
        </div>
      </section>
    </>
  );
};

export default Promo;
