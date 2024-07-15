export default function PersonalDetail({ person, setPerson }) {
  function handleChange(e) {
    const fieldName = e.target.id;
    const value = e.target.value;

    const fieldMapping = {
      personName: 'name',
      email: 'email',
      phoneNumber: 'phoneNumber',
    };

    const propertyName = fieldMapping[fieldName];

    setPerson((prevPerson) => ({
      ...prevPerson,
      [propertyName]: value,
    }));
  }

  return (
    <>
      <h1 className="person-header-text">Personal Detail</h1>
      <div>
        <label htmlFor="personName">Personal Details:</label>
        <input
          type="text"
          id="personName"
          value={person.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={person.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={person.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
