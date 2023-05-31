import React from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "./API";

/** Render the company detail.
 */
function CompanyDetail() {
  const { handle } = useParams();
  return (
    <div>
      <h1> DETAIL OF GIVEN COMPANY</h1>
    </div>
  );
}

export default CompanyDetail;