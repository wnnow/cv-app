import { useState } from 'react';

export default function ExperienceInputSection({ setPerson, exp }) {
  const [working, setWorking] = useState(false);

  function handleChange(e) {
    const { id, checked, type, value } = e.target;
    const newValue = type === 'checked' ? checked : value;
    console.log(checked);
    if (id === 'currentlyEmployed') {
      setWorking(checked);

      setPerson((prevPerson) => ({
        ...prevPerson,
        workExperience: prevPerson.workExperience.map((item) =>
          item.id === exp.id
            ? {
                ...item,
                currentlyEmployed: checked,
                endDate: checked ? 'Present' : '',
              }
            : item
        ),
      }));
    } else {
      setPerson((prevPerson) => ({
        ...prevPerson,
        workExperience: prevPerson.workExperience.map((item) =>
          item.id === exp.id ? { ...item, [id]: newValue } : item
        ),
      }));
    }
  }

  function handleDelete() {
    setPerson((prevPerson) => ({
      ...prevPerson,
      workExperience: prevPerson.workExperience.filter(
        (item) => item.id !== exp.id
      ),
    }));
  }

  return (
    <>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <div>
        <label htmlFor="companyName">Company:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={exp.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={exp.position}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="responsibilities">Responsibilities:</label>

        <textarea
          type="text"
          id="responsibilities"
          name="responsibilities"
          value={exp.responsibilities}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="startDate">Start date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={exp.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="checkBox"
          id="currentlyEmployed"
          name="currentlyEmployed"
          checked={exp.currentlyEmployed}
          onChange={handleChange}
        />
        <label htmlFor="currentlyEmployed">Currently working</label>
      </div>
      <div>
        <label htmlFor="endDate">End date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={exp.endDate}
          onChange={handleChange}
          required
          disabled={working}
        />
      </div>
    </>
  );
}
