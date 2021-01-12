import { ActionTypes as app_ac } from "./app";
import axios from "axios";
import { API } from "./../../constants";
import { /* Action, ActionCreator, */ Dispatch } from "redux";
// import { ThunkAction } from "redux-thunk";
import { chunkedArray, countPagination } from "./../../helpers/index";

/* ts */

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  description: string;
};

export interface ITableState {
  list: User[][];
  initialList: User[];
  currentUser?: User;
  currentPaginationPage: number;
  paginations: number[];
}

/* 
  ACTION TYPES 
*/

export enum ActionTypes {
  setData = "FETCH/SET_DATA",
  setCurrentUser = "APP/SET_CURRENT_USER",

  setPaginations = "APP/SET_PAGINATIONS",
  updateList = "APP/UPDATE_LIST",
  setCurrentPaginationPage = "APP/SET_CURRENT_PAGINATION_Page",
}

/* 
  ACTION CREATORS
*/

export function getAllUsers() {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch({ type: app_ac.loading_on });

    try {
      const { data: list } = await axios.get(API);

      const chunks = chunkedArray<User>(list, 25);

      if (list?.length) {
        dispatch({
          type: ActionTypes.setPaginations,
          paginations: [...countPagination(chunks.length)],
        });
        dispatch({
          type: ActionTypes.setData,
          list: chunks,
          initialList: list,
        });
      }
    } catch (error) {
      dispatch({
        type: app_ac.isError,
        errorMsg:
          "Something went wrong! Please reload the page or wait few minutes ;)",
      });
      console.error(error);
    }

    dispatch({ type: app_ac.loading_off });
  };
}

/* 
  REDUCER
*/

const init: ITableState /* Initial state */ = {
  list: [],
  currentPaginationPage: 0,
  initialList: [],
  paginations: [],
};

export function TableReducer(
  state: ITableState = init,
  action: any
): ITableState {
  switch (action.type) {
    case ActionTypes.setData:
      return { ...state, list: action.list, initialList: action.initialList };

    case ActionTypes.updateList:
      return { ...state, list: action.updateList };

    case ActionTypes.setPaginations:
      return { ...state, paginations: action.paginations };

    case ActionTypes.setCurrentPaginationPage:
      return { ...state, currentPaginationPage: action.currentPaginationPage };

    case ActionTypes.setCurrentUser:
      return { ...state, currentUser: action.currentUser };

    default:
      return state;
  }
}
