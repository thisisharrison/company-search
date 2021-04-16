import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

export const SearchContainer = (props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3 mt-5">
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
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
