import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavigationBar from "./Containers/NavigationBarContainer";
import PrivateRoute from "./Containers/PrivateRoute";
import LoginContainer from "./Containers/LoginContainer";
import ProfileContainer from "./Containers/ProfileContainer";
import NewsContainer from "./Containers/NewsContainer";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <section className="section  has-background-white-ter">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={NewsContainer} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
