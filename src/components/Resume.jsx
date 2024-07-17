export default function Resume({ person, setSubmit }) {
  function handleEdit() {
    setSubmit(false);
  }

  function convertStringToYearFormat(timeStr) {
    if (timeStr === '') return 'Present';
    const date = new Date(timeStr);

    let options = { year: 'numeric', month: 'short' };
    let formattedDate = date
      .toLocaleDateString('en-US', options)
      .replace(',', '');
    return formattedDate;
  }

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
                  {convertStringToYearFormat(edu.startDate)} -{' '}
                  {convertStringToYearFormat(edu.endDate)}
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
                  {convertStringToYearFormat(exp.startDate)} -{' '}
                  {exp.endDate === ''
                    ? 'Present'
                    : convertStringToYearFormat(exp.endDate)}
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
