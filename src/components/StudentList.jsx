export default function StudentList({
  classes,
  students,
  editStudentById,
  deleteStudentById,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Classes</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>
              {student.classes.map(
                (classId) => classes[classId - 1].name + ", "
              )}
            </td>
            <td>
              <button onClick={() => editStudentById(student.id)}>Edit</button>
              <button onClick={() => deleteStudentById(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
