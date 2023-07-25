import React from "react";
import { Link } from "react-router-dom";

/** Render information about a company.
 *
 * Link:
 * - handle: link to company detail
 *
 * Companies -> CompanyCard -> { CompanyDetail }
 */

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="">
          {logoUrl && <img className="" src={logoUrl} alt={name}></img>}
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;