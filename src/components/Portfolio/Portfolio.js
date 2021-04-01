import "./Portfolio.css";

const Portfolio = () => {
  const portfolioLinks = [
    {
      name: "Cтатичный сайт",
      url: "https://",
    },
    {
      name: "Адаптивный сайт",
      url: "https://",
    },
    {
      name: "Одностраничное приложение",
      url: "https://",
    },
  ];

  return (
    <section className="portfolio main-sizer">
      <h4 className="portfolio__heading">Портфолио</h4>
      <ul className="portfolio__links">
        {portfolioLinks.map((link, index) => {
          return (
            <li className="portfolio__link" key={index}>
              <a className="portfolio__url" href={link.url}>
                {link.name}
              </a>
              <a className="portfolio__arrow" href={link.url}>
                {""}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
