import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../State/ducks/app";
import { getAllUsers, ITableState } from "../State/ducks/table";
import { IRootState } from "../State/index";
import { User } from "../State/ducks/table";

declare type GetUsersHook = {
  data: User[][];
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | null;
};

export function useGetUsers(): GetUsersHook {
  const { isLoading, isError, errorMsg }: IAppState = useSelector<
    IRootState,
    IAppState
  >((state) => state.app);

  const { list: data }: ITableState = useSelector<IRootState, ITableState>(
    ({table}) => table
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return { data, isLoading, isError, errorMsg };
}
