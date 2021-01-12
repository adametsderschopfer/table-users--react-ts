import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";

import "./SearchBar.css";

export function SearchBar({
  locked,
  isError,
  setSearchLine,
}: InferProps<typeof SearchBar.propTypes>) {
  const [searchBar, setSearchBar] = useState("");

  return (
    <>
      <hr />
      <div className="Table__searchBar">
        <input
          onChange={(e: any) => setSearchBar(e.target.value)}
          type="text"
          placeholder="Search"
          disabled={locked || isError}
        />
        <button
          disabled={locked || isError}
          onClick={() => setSearchLine(searchBar)}
        >
          Search
        </button>
      </div>
      <hr />
    </>
  );
}

SearchBar.propTypes = {
  locked: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  setSearchLine: () => {},
};
