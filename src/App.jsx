import { useState, useEffect } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { fetchData } from "./utils/fetchData";

const blankStudent = {
  id: "",
  name: "",
  age: "",
  email: "",
  classes: [],
};

function App() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(blankStudent);

  useEffect(() => {
    const fun = async () => {
      setClasses(await fetchClasses());
      setStudents(await fetchStudents());
    };
    fun();
  }, []); // Empty dependency array means this runs once on mount

  async function fetchClasses() {
    const response = await fetch("http://localhost:3000/classes");
    const data = await response.json();
    return data;
  }

  async function fetchStudents() {
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();
    return data;
  }

  async function getStudentById(studentId) {
    const response = await fetch("http://localhost:3000/students/" + studentId);
    const data = await response.json();
    return data;
  }

  async function deleteStudentById(studentId) {
    await fetch("http://localhost:3000/students/" + studentId, {
      method: "DELETE",
    });
    setStudents(await fetchStudents());
  }

  async function updateStudentById(studentId) {
    await fetch("http://localhost:3000/students/" + studentId, {
      method: "PUT",
      body: JSON.stringify(currentStudent),
    });
    setStudents(await fetchStudents());
  }

  async function createStudent() {
    let studentToCreate = { ...currentStudent };
    delete studentToCreate.id;

    await fetch("http://localhost:3000/students/", {
      method: "POST",
      body: JSON.stringify(studentToCreate),
    });
    setStudents(await fetchStudents());
  }

  async function editStudentById(studentId) {
    setCurrentStudent(await getStudentById(studentId));
  }

  function createOrUpdateCurrentStudent(event) {
    event.preventDefault();
    if (currentStudent.id === "") {
      createStudent();
    } else {
      updateStudentById(currentStudent.id);
    }

    clearFields();
  }

  function clearFields() {
    setCurrentStudent(blankStudent);
  }

  return (
    <>
      <StudentForm
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
        createOrUpdateCurrentStudent={createOrUpdateCurrentStudent}
        clearFields={clearFields}
      />
      <StudentList
        classes={classes}
        students={students}
        editStudentById={editStudentById}
        deleteStudentById={deleteStudentById}
      />
    </>
  );
}

export default App;
