import React from "react";

import { State } from "./../../State/index";
import { Table } from './../Table/Table';

import "./App.css";

export function App() {
  return (
    <State>
      <Table />
    </State>
  );
}
