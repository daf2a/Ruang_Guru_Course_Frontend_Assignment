import logo from './logo.svg';
import './App.css';

// import useState hook
import { useState } from "react";

function Student() {
  // create state
  const [name, setName] = useState("John Doe");

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Jane Doe")}>Change Name</button>
    </div>
  );
}

export default Student;
