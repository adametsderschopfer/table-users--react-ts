import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../State";
import { ActionTypes, ITableState } from "../State/ducks/table";

interface PaginationHook {
  paginations: number[];
  currentPaginationPage: number;
  setPagination: (count: number) => void;
}

export function usePagination(): PaginationHook {
  const { paginations, currentPaginationPage } = useSelector<
    IRootState,
    ITableState
  >(({ table }) => table);

  const dispatch = useDispatch();

  function setPagination(count: number) {
    dispatch({
      type: ActionTypes.setCurrentPaginationPage,
      currentPaginationPage: count,
    });
  }

  return { paginations, currentPaginationPage, setPagination };
}
