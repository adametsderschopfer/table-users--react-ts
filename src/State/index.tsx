import { applyMiddleware, createStore, Middleware } from "redux";
import { Provider } from "react-redux";
import PropTypes, { InferProps } from "prop-types";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

import { IAppState } from "./ducks/app";
import { ITableState } from "./ducks/table";

interface IRootState {
  table: ITableState;
  app: IAppState;
}

const middlewares: Middleware[] = [thunk];

const enhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore<IRootState, any, any, any>(reducers, enhancers);

export function State({ children }: InferProps<typeof State.propTypes>) {
  return <Provider store={store}>{children}</Provider>;
}

State.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
