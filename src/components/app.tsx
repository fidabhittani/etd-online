import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "layout/main";
import Welcome from "components/welcome";
// import SecondaryView from "components/secondary-view";
import { BackTop } from "antd";
const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/vehicle-transfer" component={Welcome} />
        <Redirect from="/" to="/vehicle-transfer" />
      </Switch>
      <BackTop style={{ color: "red" }} />
    </MainLayout>
  );
};

export default App;
