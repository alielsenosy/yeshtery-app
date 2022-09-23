import React, { Component, Suspense, lazy } from "react";
import "./App.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Similar from "./Components/Body/Similar";
import HeaderTop from "./Components/HeaderTop";
import HeaderMid from "./Components/HeaderMid";
import HeaderBottom from "./Components/HeaderBottom";
import Footer from "./Components/Footer";
import * as mdb from "mdb-ui-kit";
const ProductBody = lazy(() => import("./Components/Body/ProductBody"));

const App = () => {
  return (
    <BrowserRouter>
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
      <Suspense
        fallback={
          <CircularProgress color="secondary" sx={{ margin: "auto" }} />
        }
      >
        <Switch>
          <Route exact path="/product/:id">
            <ProductBody />
          </Route>
          <Route path="/">
            <Similar />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
