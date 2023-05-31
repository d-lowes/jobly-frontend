import React from "react";

function JobCard({ salary, handle, equity, title }) {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <p>{handle}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;