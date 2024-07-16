import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ComponentWrapper from './components/ComponentWrapper';
import PersonalDetailInputSection from './components/PersonalDetailInputSection';
import EducationInputSection from './components/EducationInputSection';
import ExperienceInputSection from './components/ExperienceInputSection';
import Resume from './components/Resume';

function App() {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    professionalSummary: '',
    education: [],
    workExperience: [],
  });
  const [isSubmit, setSubmit] = useState(false);

  function addExampleInfo() {
    const defaultPerson = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      professionalSummary:
        'Highly skilled Software Engineer with 5 years of experience in developing web applications and data analysis. Proven ability to lead projects and deliver high-quality software solutions. Seeking to leverage my technical expertise and leadership skills in a challenging role at an innovative company.',
      education: [
        {
          id: uuidv4(),
          schoolName: 'University of Example',
          degree: 'Bachelor of Science in Computer Science',
          startDate: '2015-09-01',
          endDate: '2019-06-15',
        },
        {
          id: uuidv4(),
          schoolName: 'Example High School',
          degree: 'High School Diploma',
          startDate: '2011-09-01',
          endDate: '2015-06-15',
        },
      ],
      workExperience: [
        {
          id: uuidv4(),
          companyName: 'Tech Solutions Inc.',
          position: 'Software Engineer',
          responsibilities:
            'Developing web applications, maintaining software systems, and collaborating with cross-functional teams.',
          currentlyEmployed: true,
          startDate: '2020-01-15',
          endDate: '',
        },
        {
          id: uuidv4(),
          companyName: 'Data Analytics Corp.',
          position: 'Data Analyst Intern',
          responsibilities:
            'Assisting in data analysis, creating reports, and supporting the data science team.',
          currentlyEmployed: false,
          startDate: '2019-06-01',
          endDate: '2019-12-31',
        },
      ],
    };
    setPerson(defaultPerson);
  }

  function validateForm() {
    const { name, email, phoneNumber, education, workExperience } = person;

    if (!name || !email || !phoneNumber) {
      return false;
    }

    for (let edu of education) {
      if (!edu.schoolName || !edu.degree || !edu.startDate || !edu.endDate) {
        return false;
      }
    }

    for (let exp of workExperience) {
      if (
        !exp.companyName ||
        !exp.position ||
        !exp.startDate ||
        (exp.currentlyEmployed === false && !exp.endDate)
      ) {
        return false;
      }
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setSubmit(true);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  function addEducation() {
    setPerson((prevPerson) => ({
      ...prevPerson,
      education: [
        ...prevPerson.education,
        {
          id: uuidv4(),
          schoolName: '',
          degree: '',
          startDate: '',
          endDate: '',
        },
      ],
    }));
  }

  function addExperience() {
    setPerson((prevPerson) => ({
      ...prevPerson,
      workExperience: [
        ...prevPerson.workExperience,
        {
          id: uuidv4(),
          companyName: '',
          position: '',
          responsibilities: '',
          currentlyEmployed: false,
          startDate: '',
          endDate: '',
        },
      ],
    }));
  }

  if (person.education.length === 0) {
    addEducation();
  }

  if (person.workExperience.length === 0) {
    addExperience();
  }

  function resetPerson() {
    setPerson({
      name: '',
      email: '',
      phoneNumber: '',
      professionalSummary: '',
      education: [],
      workExperience: [],
    });
  }

  console.log(person);

  return (
    <>
      {isSubmit ? (
        <Resume person={person} />
      ) : (
        <>
          <h1 className="cv-header-text">CV Simple Template</h1>
          <form action="#" className="input-container" id="input-container">
            <div className="button-input-container">
              <button
                type="button"
                onClick={addExampleInfo}
                className="example-button"
              >
                Example Resume
              </button>
              <button
                type="button"
                onClick={resetPerson}
                className="clear-button"
              >
                Clear Resume
              </button>
            </div>
            <ComponentWrapper className="person-detail-container">
              <PersonalDetailInputSection
                person={person}
                setPerson={setPerson}
              />
            </ComponentWrapper>
            <ComponentWrapper className="education-detail-input-container">
              <h2 className="education-header-input-text">Education</h2>
              {person.education.map((edu) => (
                <EducationInputSection
                  key={edu.id}
                  edu={edu}
                  setPerson={setPerson}
                />
              ))}
              <button
                type="button"
                onClick={addEducation}
                className="add-more-input-button"
              >
                Add more education
              </button>
            </ComponentWrapper>
            <ComponentWrapper className="experience-detail-input-container">
              <h2 className="education-header-input-text">Work Experience</h2>
              {person.workExperience.map((exp) => (
                <ExperienceInputSection
                  key={exp.id}
                  exp={exp}
                  setPerson={setPerson}
                />
              ))}
              <button
                type="button"
                onClick={addExperience}
                className="add-more-input-button"
              >
                Add more experience
              </button>
            </ComponentWrapper>
            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default App;
