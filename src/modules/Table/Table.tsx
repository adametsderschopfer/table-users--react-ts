import { useGetUsers } from "../../hooks/useGetUsers";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useSearch } from "./../../hooks/useSearch";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Loader } from "./../../components/Loader/Loader";
import { ErrorBlank } from "./../../components/ErrorBlank/ErrorBlank";
import { TableList } from "./../../components/TableList/TableList";
import { CurrentUser } from "./../../components/CurrentUser/CurrentUser";
import { Paginations } from "./../../components/Paginations/Paginations";
import { usePagination } from "./../../hooks/usePagination";
import { TableHeader } from "./../../components/TableList/TableHeader/TableHeader";

import "./Table.css";

const msg_empty = "Users not found ;(";

export function Table() {
  const { data, isLoading, isError, errorMsg } = useGetUsers();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { setSearchLine, isErrorSearch, setIsErrorSearch } = useSearch();
  const { paginations, setPagination, currentPaginationPage } = usePagination();

  return (
    <main className="Table">
      <SearchBar
        locked={isLoading}
        setSearchLine={setSearchLine}
        isError={isError}
        isErrorSearch={isErrorSearch}
        setIsErrorSearch={setIsErrorSearch}
      />

      {(isLoading && <Loader />) ||
        (!isLoading && isError && <ErrorBlank msg={errorMsg} />) ||
        (!isError &&
          !isLoading &&
          ((data && data.length && (
            <>
              <table className="Table__list">
                <TableHeader />
                <TableList
                  list={data}
                  setCurrentUser={setCurrentUser}
                  currentPaginationPage={currentPaginationPage}
                />
              </table>
              <Paginations
                paginations={paginations}
                setPagination={setPagination}
                currentPaginationPage={currentPaginationPage}
              />
            </>
          )) ||
            (!isLoading && <ErrorBlank msg={msg_empty} />)))}

      {(currentUser !== undefined && Object.keys(currentUser).length && (
        <CurrentUser user={currentUser} />
      )) ||
        ""}
    </main>
  );
}
