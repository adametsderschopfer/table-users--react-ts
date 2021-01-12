import { useDispatch, useSelector } from "react-redux";

import { ActionTypes, ITableState, User } from "../State/ducks/table";
import { IRootState } from "../State";

export function useCurrentUser() {
  const { currentUser, currentPaginationPage, list }: ITableState = useSelector<
    IRootState,
    ITableState
  >(({ table }) => table);

  const dispatch = useDispatch();

  function setCurrentUser(id?: number | string) {
    const userDispatch = (cu: User | {}) =>
      dispatch({ type: ActionTypes.setCurrentUser, currentUser: cu });

    // eslint-disable-next-line eqeqeq
    const curru = list[currentPaginationPage].find((i) => id == i.id) || {};

    userDispatch(curru);
  }

  return { currentUser, setCurrentUser };
}
