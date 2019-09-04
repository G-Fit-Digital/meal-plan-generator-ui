import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "react-sidebar";
import { useMappedState } from "redux-react-hook";
import Drawer from "./components/Drawer/Drawer";
import AddItem from "./routes/AddItem/AddItem";

const mappedState = (state: any) => ({
  drawerOpen: state.configReducer.drawerOpen
});

export default ({ props }: any) => {
  const { drawerOpen } = useMappedState(mappedState);
  const [width, setWidth] = useState(window.innerWidth);
  function resize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      resize();
    });
  }, []);
  return (
    <Router>
      <Route
        render={props => (
          <Sidebar sidebar={<Drawer props={props} />} open={drawerOpen}>
            <Route
              component={(props: Object) => (
                <React.Fragment>
                  <Header props={props} />
                </React.Fragment>
              )}
            />
            <Route path="/" component={AddItem} />
          </Sidebar>
        )}
      />
    </Router>
  );
};
