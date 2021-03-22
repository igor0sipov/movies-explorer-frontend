import "./SectionHeading.css";

const SectionHeading = (props) => {
  return (
    <div className="heading">
      <h2 className="heading__text">{props.text}</h2>
      <div className="heading__separator"></div>
    </div>
  );
};

export default SectionHeading;
