import { React, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "../API";
import { Navigate } from "react-router-dom";
import JobCardList from "../Jobs/JobCardList";
import userContext from "../userContext";

/** Render the company detail.
 *
 * State:
 * - companyDetail: an object of information about the company
 *
 * CompanyCard -> CompanyDetail -> { JobCardList }
 */
function CompanyDetail() {
  const { user } = useContext(userContext);
  const { handle } = useParams();
  const [companyDetail, setCompany] = useState(({
    data: null,
    isLoading: true
  }));

  /** Render the company detail on mount. */
  useEffect(function () {
    async function getCompanyDetail() {
      const newDetail = await JoblyApi.getCompany(handle);
      setCompany(({
        data: newDetail,
        isLoading: false
      }));
    }
    getCompanyDetail();
  }, []);

  if (companyDetail.isLoading) return <i>Loading...</i>;

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-job-hiring bg-scroll min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4">
        <h1 className="mb-4 font-extrabold leading-none text-3xl py-2 text-white">
          {companyDetail.data.name}
        </h1>
        <p className="text-white">{companyDetail.data.description}</p>
      </div>
      {companyDetail.data.jobs &&
        <JobCardList jobs={companyDetail.data.jobs} />}
    </div>
  );
}

export default CompanyDetail;