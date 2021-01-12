import PropTypes, { InferProps } from "prop-types";

import "./Paginations.css";

export function Paginations({
  paginations,
  setPagination,
  currentPaginationPage,
}: InferProps<typeof Paginations.propTypes>) {
  return (
    <>
      <hr />

      <div className="Table__paginations">
        {paginations.length &&
          paginations.map((i, idx) => (
            <button
              key={idx}
              className={(currentPaginationPage === i && "active") || ""}
              onClick={() => setPagination(i)}
            >
              Страница {i + 1}
            </button>
          ))}
      </div>
      <hr />
    </>
  );
}

Paginations.propTypes = {
  paginations: PropTypes.array.isRequired,
  setPagination: () => {},
  currentPaginationPage: PropTypes.number.isRequired,
};
