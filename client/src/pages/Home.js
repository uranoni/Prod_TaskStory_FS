import React from "react";
import Navbar from "../components/Navbar";
import DrawerLeft from "../components/DrawerLeft";
import { Switch, Route } from "react-router-dom";

import DrawContext from "../context/DrawContext";

import MainStory from "./Story/MainStory";
import ShowStory from "./Story/ShowStory";

const Home = () => {
  const [{ drawstatus }, setDrawState] = React.useState({ drawstatus: false });

  const toggleDrawer = () => {
    setDrawState({
      drawstatus: !drawstatus
    });
  };
  const contextValue = {
    drawstatus,
    toggleDrawer
  };

  return (
    <div>
      <DrawContext.Provider value={contextValue}>
        <DrawerLeft />
        <Navbar />
      </DrawContext.Provider>
      <Switch>
        <Route path='/story' exact component={MainStory} />
        <Route path='/showstory' exact component={ShowStory} />
      </Switch>
    </div>
  );
};

export default Home;
