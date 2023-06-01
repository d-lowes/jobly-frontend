import React from "react";
import { useEffect, useState } from "react";
import { JoblyApi } from "./API";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

/** Gets an array of jobs
 *
 * State:
 * - jobs: a current list of jobs
 *
 * RoutesList -> Jobs -> { JobCardList, SearchForm }
 */
function Jobs() {
  const [jobs, setJobs] = useState([]);
  /** Renders all Jobs on mount. */
  useEffect(() => {
    getJobs();
  }, []);
//TODO: ISLOADING

  /** Retrieve a list of jobs from the API. */
  async function getJobs(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  return (
    <div>
      <h1>Jobs</h1>
      <SearchForm search={getJobs} />
      <div className="company-list">
        <JobCardList jobs={jobs} />
      </div>
    </div>
  );
}

export default Jobs;