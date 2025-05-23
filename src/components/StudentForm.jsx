export default function StudentForm({
  currentStudent,
  setCurrentStudent,
  createOrUpdateCurrentStudent,
  clearFields,
}) {
  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    setCurrentStudent({ ...currentStudent, [id]: value });
  }

  return (
    <>
      {JSON.stringify(currentStudent)}
      <form onSubmit={createOrUpdateCurrentStudent}>
        <b>Id</b>
        {" " + currentStudent.id + " "}
        <b>
          <label htmlFor="name">Name</label>
        </b>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={currentStudent.name}
          onChange={handleChange}
        />
        <b>
          <label htmlFor="age">Age</label>
        </b>
        <input
          id="age"
          type="number"
          min="1"
          max="120"
          placeholder="Enter age"
          value={currentStudent.age}
          onChange={handleChange}
        />
        <b>
          <label htmlFor="email">Email</label>
        </b>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={currentStudent.email}
          onChange={handleChange}
        />
        {/* <label htmlFor="class">Class</label>
        <select id="class">
          <option value="Math 101">Math 101</option>
          <option value="History 201">History 201</option>
        </select> */}
        <button type="submit">Create/Update</button>
      </form>
      <button onClick={clearFields}>Clear fields</button>
    </>
  );
}
