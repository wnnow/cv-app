export default function EducationInputSection({ setPerson, edu }) {
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
          name="schoolName"
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
          name="schoolName"
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
          name="startDate"
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
          name="endDate"
          value={edu.endDate}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}
