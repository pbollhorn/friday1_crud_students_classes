import { useState, useEffect } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import StudentList from "./components/StudentList";
import { fetchData } from "./utils/fetchData";

function App() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({});

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

  async function deleteStudent(studentId) {
    await fetch("http://localhost:3000/students/" + studentId, {
      method: "DELETE",
    });
    setStudents(await fetchStudents());
  }

  return (
    <>
      <PersonForm />
      <StudentList
        classes={classes}
        students={students}
        deleteStudent={deleteStudent}
      />
    </>
  );
}

export default App;
