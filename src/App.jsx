import { useState, useEffect } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import StudentList from "./components/StudentList";
import { fetchData } from "./utils/fetchData";

function App() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData("http://localhost:3000/classes", (data) => {
      setClasses(data);
      console.log(data);

      fetchData("http://localhost:3000/students", (data) => {
        setStudents(data);
        console.log(data);
      });
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <PersonForm />
      <StudentList classes={classes} students={students} />
    </>
  );
}

export default App;
