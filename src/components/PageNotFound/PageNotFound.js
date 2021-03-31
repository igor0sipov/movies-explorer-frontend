import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = (props) => {
  console.log(props.location);
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <Link to={props.location}></Link>
    </section>
  );
};

export default PageNotFound;
