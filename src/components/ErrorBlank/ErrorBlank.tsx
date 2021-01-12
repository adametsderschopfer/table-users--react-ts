import PropTypes, { InferProps } from "prop-types";

import "./ErrorBlank.css";

export function ErrorBlank({ msg = "Something went wrong ;(" }: InferProps<typeof ErrorBlank.propTypes>) {
  return (
    <div className="Table__error-blank">
      <div className="Table__error-blank--msg">{msg}</div>
    </div>
  );
}

ErrorBlank.propTypes = {
  msg: PropTypes.string || null,
};
