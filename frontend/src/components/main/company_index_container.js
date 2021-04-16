import React from "react";
import { Col, Jumbotron, Row } from "react-bootstrap";
import { connect } from "react-redux";
import CompanyIndexItem from "./company_index_item";
import { selectAllCompanies } from "./../../reducers/selectors";

export const CompanyIndex = ({ companies }) => {
  return (
    <Jumbotron className="min-vh-100">
      <Row>
        {companies.map((company) => {
          return (
            <Col md="12" lg="6" className="mb-4">
              <CompanyIndexItem
                key={`company-${company.id}`}
                company={company}
              />
            </Col>
          );
        })}
      </Row>
    </Jumbotron>
  );
};

const mapStateToProps = ({ entities }) => ({
  companies: selectAllCompanies(entities),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyIndex);
