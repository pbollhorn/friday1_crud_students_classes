export default function StudentForm({ currentStudent }) {
  return (
    <>
      <form>
        <label htmlFor="id">Id</label>
        <input
          id="id"
          type="number"
          readOnly
          placeholder="id"
          value={currentStudent.id}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={currentStudent.name}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          min="1"
          max="120"
          placeholder="Enter age"
          value={currentStudent.age}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={currentStudent.email}
        />
        {/* <label htmlFor="class">Class</label>
        <select id="class">
          <option value="Math 101">Math 101</option>
          <option value="History 201">History 201</option>
        </select> */}
      </form>
      <button>Create/Update</button>
      <button>Clear fields</button>
    </>
  );
}
