import "./Footer.css";

const Footer = () => {
  const links = [
    {
      name: "Яндекс.Практикум",
      url: "https://praktikum.yandex.ru",
    },
    {
      name: "GitHub",
      url: "https://github.com/igor0sipov",
    },
    {
      name: "VK",
      url: "https://vk.com/id600487420",
    },
  ];

  return (
    <footer className="footer section">
      <div className="footer__sizer">
        <div className="footer__container">
          <p className="footer__about">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__info">
            <p className="footer__copyright">© 2021</p>
            <ul className="footer__links">
              {links.map((link, index) => {
                return (
                  <li className="footer__link-elem" key={index}>
                    <a
                      className="footer__link focused-text hovered"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
