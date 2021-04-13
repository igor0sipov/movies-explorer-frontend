import "./AboutMe.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import studentPhotoPath from "../../images/student.jpg";

const AboutMe = () => {
  const links = [
    {
      name: "VK",
      url: "https://vk.com/id600487420",
    },
    {
      name: "GitHub",
      url: "https://github.com/igor0sipov",
    },
  ];

  return (
    <section className="student main-sizer">
      <SectionHeading text="Студент" />
      <div className="student__container">
        <img
          className="student__photo"
          src={studentPhotoPath}
          alt="Фото студента"
        />
        <div className="student__about">
          <h3 className="student__name">Игорь</h3>
          <p className="student__status">Фронтенд-разработчик, 22 года</p>
          <p className="student__bio">
            Я родился и вырос в городе Витебск, Беларусь. Окончил
            Радиотехнический факультет Полоцкого Государственного Университета
            по специальности "Проектирование и производство
            программно-управляемых электронных средств" с квалификацией
            инженер-электроник-программист. С 2019 года работаю на должности
            инженер-электроник. В свободное время люблю изучать что-нибудь
            новое, отдыхать в компании друзей или просто играть на гитаре. С
            2020 года стал студентом в Яндекс.Практикум, после окончания учебы
            планирую сменить место работы, чтобы совершенствовать полученные
            навыки.
          </p>
          <ul className="student__links">
            {links.map((link, index) => {
              return (
                <li
                  className="student__list-element"
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <a
                    className="student__link focused-text hovered"
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
    </section>
  );
};

export default AboutMe;
