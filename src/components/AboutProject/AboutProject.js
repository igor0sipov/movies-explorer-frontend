import "./AboutProject.css";
import SectionHeading from "../SectionHeading/SectionHeading";

const AboutProject = () => {
  return (
    <section className="about-project main-sizer">
      <SectionHeading text={"О проекте"} />
      <div className="about-project__articles">
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-part about-project__timeline-part_type_backend">
          1 неделя
        </div>
        <div className="about-project__timeline-part about-project__timeline-part_type_frontend">
          4 недели
        </div>
        <p className="about-project__timeline-label">Back-end</p>
        <p className="about-project__timeline-label">Front-end</p>
      </div>

      {/* <div className="about-project__timeline">
        <div
          className=" about-project__timeline-container 
        about-project__timeline-container_type_backend"
        >
          <div className="about-project__timeline-part">1 неделя</div>
          <p className="about-project__timeline-label">Back-end</p>
        </div>
        <div
          className=" about-project__timeline-container 
        about-project__timeline-container_type_frontend"
        >
          <div className="about about-project__timeline-part_type_frontend">
            4 недели
          </div>
          <p className="about-project__timeline-label">Front-end</p>
        </div>
      </div> */}
    </section>
  );
};

export default AboutProject;
