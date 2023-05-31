import React from "react";

function CompanyCard({ name, description, logoUrl }) {
 return(
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <img src={logoUrl} alt={name}></img>
  </div>
 )
}

export default CompanyCard;