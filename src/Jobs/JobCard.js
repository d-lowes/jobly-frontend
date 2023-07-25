import React from "react";

/** Render a job.
 *
 * Jobs -> JobCardList -> JobCard
 */
function JobCard({ salary, handle, equity, title }) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h4>{title}</h4>
      <p>{handle}</p>
      <p>Salary: {salary}</p>
      {equity !== null && <p>Equity: {equity}</p>}
    </div>
  );
}

export default JobCard;