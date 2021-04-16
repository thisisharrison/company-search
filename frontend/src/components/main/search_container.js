import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCompanies } from "../../actions/company_action";
import { filterFavorite } from "../../reducers/selectors";

export const SearchContainer = ({ fetchCompanies, filterFavorite }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    fetchCompanies();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterFav = (e) => {
    e.preventDefault();
    filterFavorite();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-5 mt-5">
        <FormControl
          type="text"
          placeholder="Company Name"
          aria-label="Company Name"
          aria-describedby="Company Name"
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit">
            Search
          </Button>
          <Button variant="outline-secondary" type="button" onClick={filterFav}>
            Filter Favourites
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = ({ entities }) => (dispatch) => ({
  filterFavorite: () => dispatch(filterFavorite()),
  fetchCompanies: () => dispatch(fetchCompanies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
