import { useState } from 'react';

import './App.css';
import ComponentWrapper from './components/ComponentWrapper';
import PersonalDetail from './components/PersonalDetail';

function App() {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    education: [
      {
        schoolName: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ],
    workExperience: [
      {
        companyName: '',
        position: '',
        responsibilities: '',
        currentlyEmployed: false,
        startDate: '',
        endDate: '',
      },
    ],
  });

  console.log(person);

  return (
    <>
      <ComponentWrapper>
        <PersonalDetail person={person} setPerson={setPerson} />
      </ComponentWrapper>
    </>
  );
}

export default App;
