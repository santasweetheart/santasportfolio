
export const SkillPill = ({ skill, source }) => {
    return (
      <div className="skillpill">
        <img src={source} alt={skill} />
        <p className="skill-text">{skill}</p>
      </div>
    );
  };
  