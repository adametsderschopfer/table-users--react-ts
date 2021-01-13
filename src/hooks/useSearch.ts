import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, ITableState, User } from "../State/ducks/table";
import { chunkedArray, countPagination } from "./../helpers/index";
import { IRootState } from "./../State/index";

export function useSearch() {
  const [isErrorSearch, setIsErrorSearch] = useState(false);
  const { initialList } = useSelector<IRootState, ITableState>(
    ({ table }) => table
  );

  const dispatch = useDispatch();

  function setSearchLine(value: string) {
    if (isErrorSearch) setIsErrorSearch(false);

    let updateList: User[] = [];
    let chunkedUpdatedList: User[][];

    function escapeRegExp(string: string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    const pattern = (val: string) =>
      new RegExp("(" + escapeRegExp(val) + ")", "gi");

    for (let user of initialList) {
      const upd = () => {
        updateList.push(user);
      };

      if (user.firstName.match(pattern(value))) upd();
      else if (user.id.toString().match(pattern(value.toString()))) upd();
      else if (user.lastName.match(pattern(value))) upd();
      else if (user.email.match(pattern(value))) upd();
      else if (user.phone.match(pattern(value.toString()))) upd();
      else if (user.adress.streetAddress.match(pattern(value))) upd();
      else if (user.adress.city.match(pattern(value))) upd();
      else if (user.adress.state.match(pattern(value))) upd();
      else if (user.adress.zip.match(pattern(value.toString()))) upd();
    }

    function dispatcherList(arr: User[][]) {
      dispatch({
        type: ActionTypes.updateList,
        updateList: arr,
      });

      dispatch({
        type: ActionTypes.setPaginations,
        paginations: countPagination(arr.length),
      });
    }

    if (updateList.length) {
      chunkedUpdatedList = chunkedArray<User>(updateList, 25);

      dispatcherList(chunkedUpdatedList);
    } else {
      if (!value.trim().length) setIsErrorSearch(false);
      else setIsErrorSearch(true);
      dispatcherList(chunkedArray<User>(initialList, 25));
    }
  }

  return { setSearchLine, isErrorSearch, setIsErrorSearch };
}
