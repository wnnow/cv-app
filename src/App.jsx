import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ComponentWrapper from './components/ComponentWrapper';
import PersonalDetailInputSection from './components/PersonalDetailInputSection';
import EducationInputSection from './components/EducationInputSection';

function App() {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    education: [
      // {
      //   schoolName: '',
      //   degree: '',
      //   startDate: '',
      //   endDate: '',
      // },
    ],
    workExperience: [
      // {
      //   companyName: '',
      //   position: '',
      //   responsibilities: '',
      //   currentlyEmployed: false,
      //   startDate: '',
      //   endDate: '',
      // },
    ],
  });

  function handleSubmit(e) {
    e.preventDefault();
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

  {
    person.education.length === 0 ? addEducation() : null;
  }

  return (
    <>
      <form action="#">
        <ComponentWrapper className="person-detail-container">
          <PersonalDetailInputSection person={person} setPerson={setPerson} />
        </ComponentWrapper>
        <ComponentWrapper className="education-detail-container">
          <h1 className="education-header-text">Education</h1>

          {person.education.map((edu) => (
            <EducationInputSection
              key={edu.id}
              edu={edu}
              setPerson={setPerson}
              person={person}
            />
          ))}
          <button type="button" onClick={addEducation}>
            Add more education
          </button>
        </ComponentWrapper>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
