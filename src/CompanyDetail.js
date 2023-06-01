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
    const [companyDetail, setCompany] = useState(({
      data: null,
      isLoading: true
    }));

    /** Render the company detail on mount. */
    useEffect(() => {
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

    return (
      <div>
        <h6>{companyDetail.data.name}</h6>
        <p>{companyDetail.data.description}</p>
        {companyDetail.data.jobs && <JobCardList jobs={companyDetail.data.jobs} />}
      </div>
    );
  }

export default CompanyDetail;