export default function PersonalDetailInputSection({ person, setPerson }) {
  function handleChange(e) {
    const { id, value } = e.target;

    setPerson((prevPerson) => ({
      ...prevPerson,
      [id]: value,
    }));
  }

  return (
    <>
      <h2 className="person-header-text">Personal Detail</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={person.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={person.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="professionalSummary">Professional Summary:</label>
        <textarea
          type="text"
          id="professionalSummary"
          name="professionalSummary"
          value={person.professionalSummary}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </>
  );
}
