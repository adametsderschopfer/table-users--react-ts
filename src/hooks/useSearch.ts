import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, ITableState, User } from "../State/ducks/table";
import { chunkedArray, countPagination } from "./../helpers/index";
import { IRootState } from "./../State/index";

export function useSearch() {
  const { initialList } = useSelector<IRootState, ITableState>(
    ({ table }) => table
  );

  const dispatch = useDispatch();

  function setSearchLine(value: string) {
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
      if (user.lastName.match(pattern(value))) upd();
      if (user.email.match(pattern(value))) upd();
      if (user.phone.match(pattern(value))) upd();
      if (user.adress.streetAddress.match(pattern(value))) upd();
      if (user.adress.city.match(pattern(value))) upd();
      if (user.adress.state.match(pattern(value))) upd();
      if (user.adress.zip.match(pattern(value))) upd();
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

    if (updateList && updateList.length) {
      chunkedUpdatedList = chunkedArray<User>(updateList, 25);

      dispatcherList(chunkedUpdatedList);
    } else {
      dispatcherList(chunkedArray<User>(initialList, 25));
    }
  }

  return { setSearchLine };
}
