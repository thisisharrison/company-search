import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCompanies } from "../../actions/company_action";
import { fetchUserFavorites } from "../../actions/favorite_action";
import {
  filterFavorites,
  unfilterFavorites,
  updateSearchQuery,
} from "../../actions/search_action";

export const SearchContainer = ({
  updateSearchQuery,
  fetchCompanies,
  unfilterFavorites,
  filterFavorites,
  loggedIn,
  fetchUserFavorites,
}) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      fetchUserFavorites();
    }
    fetchCompanies(search);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearchQuery(search);
    fetchCompanies(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterFav = (e) => {
    e.preventDefault();
    if (filter) {
      unfilterFavorites();
      setFilter(false);
    } else {
      filterFavorites();
      setFilter(true);
    }
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
            {filter ? "Unfilter Favourites" : "Filter Favourites"}
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompanies: (query) => dispatch(fetchCompanies(query)),
  fetchUserFavorites: () => dispatch(fetchUserFavorites()),
  filterFavorites: () => dispatch(filterFavorites()),
  unfilterFavorites: () => dispatch(unfilterFavorites()),
  updateSearchQuery: (query) => dispatch(updateSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
