import { withRouter } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = (props) => {
  const back = () => {
    props.history.goBack();
  };
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <button className="not-found__back focused-text" onClick={back}>
        Назад
      </button>
    </section>
  );
};

export default withRouter(PageNotFound);
