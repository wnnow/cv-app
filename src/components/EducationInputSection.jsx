export default function EducationInputSection({ person, setPerson, edu }) {
  console.log(person.education);

  function handleChange(e) {
    const { id, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      education: prevPerson.education.map((item) =>
        item.id === edu.id ? { ...item, [id]: value } : item
      ),
    }));
  }

  function handleDelete() {
    setPerson((prevPerson) => ({
      ...prevPerson,
      education: prevPerson.education.filter((item) => item.id !== edu.id),
    }));
  }

  return (
    <>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <div>
        <label htmlFor="schoolName">School/University:</label>
        <input
          type="text"
          id="schoolName"
          value={edu.schoolName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          value={edu.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start date:</label>
        <input
          type="date"
          id="startDate"
          value={edu.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">End date:</label>
        <input
          type="date"
          id="endDate"
          value={edu.endDate}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}
