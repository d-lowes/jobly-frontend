import React from "react";
import './CompanyCard.css';
import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <div className="card">
      <Link to={`/companies/${handle}`}>
        <div className="card-body">
          {logoUrl && <img className="mr-0" src={logoUrl} alt={name}></img>}
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;