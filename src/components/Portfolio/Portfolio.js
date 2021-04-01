import "./Portfolio.css";

const Portfolio = () => {
  const portfolioLinks = [
    {
      name: "Cтатичный сайт",
      url: "https://igor0sipov.github.io/how-to-learn/",
    },
    {
      name: "Адаптивный сайт",
      url: "https://github.com/igor0sipov/russian-travel",
    },
    {
      name: "Одностраничное приложение",
      url: "https://mesto.fakealien.students.nomoredomains.icu/",
    },
  ];

  return (
    <section className="portfolio main-sizer">
      <h4 className="portfolio__heading">Портфолио</h4>
      <ul className="portfolio__links">
        {portfolioLinks.map((link, index) => {
          return (
            <li className="portfolio__link" key={index}>
              <a
                className="portfolio__url focused-text"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
              </a>
              <a
                className="portfolio__arrow focused-box"
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
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
