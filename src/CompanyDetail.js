import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "./API";
import JobCardList from "./JobCardList";

/** Render the company detail.
 *
 * State:
 * - companyDetail: an object of information about the company
 *
 * CompanyCard -> CompanyDetail -> { JobCardList }
 */
function CompanyDetail() {
  const { handle } = useParams();
  const [companyDetail, setCompany] = useState({});
//TODO: ISLOADING
  /** Render the company detail on mount. */
  useEffect(() => {
    async function getCompanyDetail() {
      const newDetail = await JoblyApi.getCompany(handle);
      setCompany(newDetail);
    }
    getCompanyDetail();
  }, []);

  return (
    <div>
      <h6>{companyDetail.name}</h6>
      <p>{companyDetail.description}</p>
      {companyDetail.jobs && <JobCardList jobs={companyDetail.jobs} />}
    </div>
  );
}

export default CompanyDetail;