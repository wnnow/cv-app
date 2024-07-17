export default function Resume({ person, setSubmit }) {
  function handleEdit() {
    setSubmit(false);
  }

  // function convertStringToYearFormat(timeStr) {

  // }

  return (
    <>
      <div className="resume-container">
        <div className="personal-detail-section">
          <div className="personal-detail-wrapper">
            <h1>{person.name}</h1>
            <div>{person.email}</div>
            <div>{person.phoneNumber}</div>
          </div>
          <div className="professional-summary-wrapper">
            <h2>Professional Summary</h2>
            <div>{person.professionalSummary}</div>
          </div>
        </div>

        <div className="education-detail-section">
          <h2>Education</h2>
          {person.education.map((edu) => (
            <div key={edu.id} className="education-wrapper">
              <div className="school-name-date-wrapper">
                <h3>{edu.schoolName}</h3>
                <div className="education-date">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              <div>{edu.degree}</div>
            </div>
          ))}
        </div>
        <div className="experience-detail-section">
          <h2>Work Experience</h2>
          {person.workExperience.map((exp) => (
            <div key={exp.id} className="experience-wrapper">
              <div className="experience-name-date-wrapper">
                <h3>{exp.position}</h3>
                <div className="experience-date">
                  {exp.startDate} -{' '}
                  {exp.endDate === '' ? 'Present' : exp.endDate}
                </div>
              </div>
              <h4>{exp.companyName}</h4>
              <div>{exp.responsibilities}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="edit-button" type="click" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
}
