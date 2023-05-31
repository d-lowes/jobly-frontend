import React from "react";
import './CompanyCard.css';
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
    <div className="card">
      <div className="card-body">
        {logoUrl && <img className="mr-0" src={logoUrl} alt={name}></img>}
        <Link to={`/companies/${handle}`}>
          <h6>{name}</h6>
        </Link>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default CompanyCard;