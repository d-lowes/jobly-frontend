import React from "react";
import { useEffect, useState, useContext } from "react";
import { JoblyApi } from "../API";
import SearchForm from "../Forms/SearchForm";
import JobCardList from "./JobCardList";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";

/** Gets an array of jobs
 *
 * State:
 * - jobs: a current list of jobs
 *
 * RoutesList -> Jobs -> { JobCardList, SearchForm }
 */
function Jobs() {
  const { user } = useContext(userContext);

  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true
  });
  /** Renders all Jobs on mount. */
  useEffect(() => {
    getJobs();
  }, []);

  /** Retrieve a list of jobs from the API. */
  async function getJobs(title) {
    const jobs = await JoblyApi.getJobs(title);
    setJobs({
      data: jobs,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <i>Loading...</i>;

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 font-extrabold leading-none text-3xl py-2">Jobs</h1>
      <SearchForm search={getJobs} />
      <div className="company-list">
        <JobCardList jobs={jobs.data} />
      </div>
    </div>
  );
}

export default Jobs;