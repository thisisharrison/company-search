import React from "react";
import SearchContainer from "./search_container";
import CompanyIndexContainer from "./company_index_container";
import { Col, Container, Row } from "react-bootstrap";

const MainPageContainer = () => (
  <div>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="12">
          <SearchContainer />
        </Col>
        <Col xs="12">
          <CompanyIndexContainer />
        </Col>
      </Row>
    </Container>
  </div>
);

export default MainPageContainer;
