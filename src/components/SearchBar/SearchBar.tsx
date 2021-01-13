import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";
import { ErrorBlank } from "../ErrorBlank/ErrorBlank";

import "./SearchBar.css";

export function SearchBar({
  locked,
  isError,
  setSearchLine,
  isErrorSearch,
  setIsErrorSearch,
}: InferProps<typeof SearchBar.propTypes>) {
  const [searchBar, setSearchBar] = useState("");
  console.log(`isErrorSearch`, isErrorSearch);
  return (
    <>
      <hr />
      <div className="Table__searchBar">
        <input
          onChange={(e: any) => setSearchBar(e.target.value)}
          onInput={(e: any) => isErrorSearch && setIsErrorSearch(false)}
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

      {(isErrorSearch && (
        <ErrorBlank msg="Nothing found, please try again!" />
      )) ||
        ""}

      <hr />
    </>
  );
}

SearchBar.propTypes = {
  locked: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  setSearchLine: () => {},
  isErrorSearch: PropTypes.bool,
  setIsErrorSearch: () => {},
};
