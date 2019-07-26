import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        <Route exact path="/episodes" component={EpisodesList} />
      </Switch>
    </div>
  );
}
