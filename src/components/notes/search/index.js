import React, { useState } from "react";
import { Columns, Form } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchNotes(query);
    }
  };

  return (
    <Columns className="is-vcentered" breakpoint="mobile">
      <Columns.Column size="9" offset={1}>
        <Form.Field>
          <Form.Control>
            <Form.Input
              type="text"
              name={query}
              value={query}
              placeholder="Search note..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Form.Control>
        </Form.Field>
      </Columns.Column>
      <Columns.Column mobile={2} size={1}>
        <a
          href="#"
          onClick={() => {
            props.fetchNotes();
            setQuery("");
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            color="grey"
            className="is-pulled-left"
          />
        </a>
      </Columns.Column>
    </Columns>
  );
}

export default Search;
