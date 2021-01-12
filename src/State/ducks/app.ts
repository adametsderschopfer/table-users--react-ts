/* ts */

export interface IAppState {
  isLoading: boolean;
  isError: boolean;
  errorMsg: string | null;
}

/* 
  ACTION TYPES 
*/

export enum ActionTypes {
  isError = "APP/IS_ERROR",

  /* LOADING */
  loading_on = "APP/LOADING - ON",
  loading_off = "APP/LOADING - OFF",
}

/* 
  REDUCER
*/

const init: IAppState /* Initial state */ = {
  isLoading: true,
  isError: false,
  errorMsg: null,
};

export function AppReducer(state: IAppState = init, action: any): IAppState {
  switch (action.type) {
    /* 
      Можно было бы пребегнуть к написанию
      одного типа и обращяться к нему с прокидыванием
      bool значения, но так получилось как бы явно
      показать и задокументировать код 
    */

    case ActionTypes.loading_on:
      return { ...state, isLoading: true };

    case ActionTypes.loading_off:
      return { ...state, isLoading: false };

    case ActionTypes.isError:
      return { ...state, isError: !state.isError, errorMsg: action.errorMsg };

    default:
      return state;
  }
}
