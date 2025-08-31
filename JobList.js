import React from "react";

function JobList({ jobs }) {
  return (
    <div>
      <h2>My Applications</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job.title} @ {job.company} — {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
