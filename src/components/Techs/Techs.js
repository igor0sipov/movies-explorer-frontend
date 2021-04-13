import "./Techs.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const Techs = () => {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

  return (
    <section className="techs main-sizer">
      <SectionHeading text={"Технологии"} />
      <h3 className="techs__heading">{`${techs.length} технологий`}</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        {techs.map((tech, index) => {
          return (
            <li className="techs__technology" key={index}>
              {tech}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Techs;
