// import { ActionTypes as app_ac } from "./app";
// import axios from "axios";

/* ts */

type User = {};

export interface ITableState {
  list: User[];
}

/* 
  ACTION TYPES 
*/

export enum ActionTypes {}

/* 
  ACTION CREATORS
*/

/* 
  REDUCER
*/

const init: ITableState /* Initial state */ = {
  list: [],
};

export function TableReducer(
  state: ITableState = init,
  action: any
): ITableState {
  switch (action.type) {
    default:
      return state;
  }
}
