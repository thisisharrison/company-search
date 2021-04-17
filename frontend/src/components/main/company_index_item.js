import React, { useState } from "react";
import { Card } from "react-bootstrap";

const CompanyIndexItem = ({ company }) => {
  const [fav, setFav] = useState(() => company.favorite);

  const toggleFavorite = (e) => {
    e.preventDefault();
    setFav(!fav);
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{company.name}</Card.Title>
          <button onClick={toggleFavorite}>
            <i className={fav ? "bi bi-heart-fill" : "bi bi-heart"}></i>
          </button>
        </div>
        <Card.Subtitle className="mb-2">
          <a href={`${company.website}`}>{company.website}</a>
        </Card.Subtitle>

        <ul>
          <li>
            <strong>Address:</strong> {company.address}
          </li>
          <li>
            <strong>Employee Size:</strong> {company.employee_size}
          </li>
          <li>
            <strong>Email:</strong> {company.email}
          </li>
          <li>
            <strong>Phone:</strong> {company.phone_number}
          </li>
        </ul>
        {/* debugging */}
        {/* {JSON.stringify(company)} */}
      </Card.Body>
    </Card>
  );
};

export default CompanyIndexItem;
