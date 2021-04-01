import "./AboutMe.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import studentPhotoPath from "../../images/student.jpg";

const AboutMe = () => {
  const links = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
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
          <h3 className="student__name">Виталий</h3>
          <p className="student__status">Фронтенд-разработчик, 30 лет</p>
          <p className="student__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="student__links">
            {links.map((link, index) => {
              return (
                <li className="student__list-element" key={index}>
                  <a className="student__link" href={link.url}>
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
