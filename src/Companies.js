import React from "react";
import { useEffect, useState } from "react";
import { JoblyApi } from "./API";
import CompanyDetail from "./CompanyDetail";
import CompanyCard from "./CompanyCard";


/** Render a list of companies.
 */
function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanies() {
    searchCompanies();
  }, []);

  async function searchCompanies(searchInput) {
    const companies = await JoblyApi.getCompanies(searchInput);
    setCompanies(companies);
  }

  return (
    <div>
      <h1>Companies</h1>
      {/* <SearchForm search={searchCompanies} /> */}
      {companies.length > 0 &&
        companies.map(c => <CompanyCard key={c.handle} company={c} />)}

    </div>
  );
}

export default Companies;