import React, { useState } from "react";

function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) return;
    addJob({ title, company, status: "Applied" });
    setTitle("");
    setCompany("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
