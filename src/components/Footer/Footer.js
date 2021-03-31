import "./Footer.css";

const Footer = ({ location }) => {
  const routes = ["/profile", "/signin", "/signup"];

  const links = [
    {
      name: "Яндекс.Практикум",
      url: "https://",
    },
    {
      name: "GitHub",
      url: "https://github.com/igor0sipov",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
  ];

  return (
    <footer
      className={`footer footer_sized ${
        routes.some((route) => route === location) && "footer_hidden"
      }`}
    >
      <p className="footer__about">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__links">
          {links.map((link, index) => {
            return (
              <li className="footer__link-elem" key={index}>
                <a className="footer__link" href={link.url}>
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
