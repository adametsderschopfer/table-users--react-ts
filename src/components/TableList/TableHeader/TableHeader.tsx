import { useFilter } from "../../../hooks/useFilter";

const els = [
  { name: "id", parent: "id" },
  { name: "firstName", parent: "firstName" },
  { name: "lastName", parent: "lastName" },
  { name: "email", parent: "email" },
  { name: "phone", parent: "phone" },
  { name: "streetAddress", parent: "adress" },
  { name: "city", parent: "adress" },
  { name: "state", parent: "adress" },
  { name: "zip", parent: "adress" },
];

export function TableHeader() {
  const { setFilter, els: elemsOfFilter } = useFilter();

  return (
    <thead>
      <tr>
        {els.map((i: any, idx) => (
          <th
            key={idx}
            onClick={() => setFilter(i)}
            className={elemsOfFilter[i.name] ? "active" : "elem"}
          >
            {i.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
