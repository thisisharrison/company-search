import React from "react";
import { Col, Jumbotron, Row } from "react-bootstrap";
import { connect } from "react-redux";
import CompanyIndexItem from "./company_index_item";
import { selectAllCompanies } from "./../../reducers/selectors";
import { postFavorite, removeFavorite } from "../../actions/favorite_action";

export const CompanyIndex = ({
  companies,
  favorites,
  postFavorite,
  removeFavorite,
}) => {
  return (
    <Jumbotron className="min-vh-100">
      <Row>
        {companies.map((company) => {
          const isFavorite = favorites.includes(company.id);
          return (
            <Col key={`company-${company.id}`} md="12" lg="6" className="mb-4">
              <CompanyIndexItem
                company={company}
                isFavorite={isFavorite}
                postFavorite={postFavorite}
                removeFavorite={removeFavorite}
              />
            </Col>
          );
        })}
      </Row>
    </Jumbotron>
  );
};

const mapStateToProps = (state) => ({
  companies: selectAllCompanies(state.entities),
  favorites: state.user.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  postFavorite: (id) => dispatch(postFavorite(id)),
  removeFavorite: (id) => dispatch(removeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyIndex);
