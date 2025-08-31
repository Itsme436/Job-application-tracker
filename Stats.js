import React from "react";

function Stats({ jobs }) {
  return (
    <div>
      <h2>Status</h2>
      <p>Total Applications: {jobs.length}</p>
    </div>
  );
}

export default Stats;
