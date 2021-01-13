import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chunkedArray } from "../helpers";
import { IRootState } from "../State";
import { ActionTypes, ITableState, User } from "../State/ducks/table";

export function useFilter() {
  const [els, setEls] = useState({
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    streetAddress: false,
    city: false,
    state: false,
    zip: false,
  });

  const { initialList }: ITableState = useSelector<IRootState, ITableState>(
    ({ table }) => table
  );

  const dispatch = useDispatch();

  type FilterElemenet = { name: string; parent: string };

  function setFilter(element: FilterElemenet) {
    setEls({ ...els, [element.name]: !els[element.name] });

    let updateList: User[] = initialList;

    function filterMath(elementA: number, elementB: number) {
      return !els[element.name] ? elementA - elementB : -elementA + -elementB;
    }

    updateList = updateList.sort((a, b) => {
      if (a[element.parent] instanceof Object) {
        if (element.name === "zip") {
          return filterMath(
            +a[element.parent][element.name],
            +b[element.parent][element.name]
          );
        }

        return filterMath(
          +a[element.parent][element.name].toString().length,
          +b[element.parent][element.name].toString().length
        );
      } else if (element.parent === "id") {
        return filterMath(+a[element.parent], +b[element.parent]);
      }

      return filterMath(
        +a[element.parent].toString().length,
        +b[element.parent].toString().length
      );
    });

    dispatch({
      type: ActionTypes.updateList,
      updateList: chunkedArray<User>(updateList),
    });
  }

  return { setFilter, els };
}
