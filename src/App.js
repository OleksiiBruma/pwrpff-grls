import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "Components/Toast";
import Header from "Components/Header";
import ShowPage from "Components/ShowPage";
import EpisodePage from "Components/EpisodePage";
import AppWrapper from "Components/AppWrapper";
import Container from "Components/Container";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <AppWrapper>
      <Header />
      <ToastContainer />
      <Container>
        <Switch>
          <Route path="/show/:id" exact component={ShowPage} />
          <Route path="/episode/:id" exact component={EpisodePage} />
          <Route path="*">
            <Redirect
              to={{
                pathname: "/show/6771",
                // show the powerpuff girl show by default
              }}
            />
          </Route>
        </Switch>
      </Container>
    </AppWrapper>
  </Router>
);

export default App;
