import PropTypes, { InferProps } from "prop-types";

interface TableHeaderProps {}

export function TableHeader({}: TableHeaderProps &
  InferProps<typeof TableHeader.propTypes>) {
  return (
    <thead>
      <tr>
        <th>id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>email</th>
        <th>phone</th>
        <th>Street Address</th>
        <th>city</th>
        <th>state</th>
        <th>zip</th>
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {};
