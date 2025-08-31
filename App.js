import React, { useState } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";
import Stats from "./Stats";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} />
      <Stats jobs={jobs} />
    </div>
  );
}

export default App;
