import React, { Fragment } from "react";
import 'bulma/css/bulma.min.css';
import './App.scss'; // Importe o arquivo SCSS
import Router from "./routes";
// import { Notification, Section } from "react-bulma-components";

const App = () => (
  <Fragment>
    <Router/>
  </Fragment>
);

export default App;
