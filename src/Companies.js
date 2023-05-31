import React from "react";
import { useEffect, useState } from "react";
import { JoblyApi } from "./API";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";



/** Render a list of companies.
 */
function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    searchCompanies();
  }, []);

  async function searchCompanies(searchInput) {
    const companies = await JoblyApi.getCompanies(searchInput);
    setCompanies(companies);
  }

  return (
    <div>
      <h1>Companies</h1>
      <SearchForm searchCompanies={searchCompanies} />
      <div className="company-list">
        {companies.map(c =>
          <CompanyCard
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl} />)}
      </div>
    </div>
  );
}

export default Companies;