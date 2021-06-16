import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Group89 from "./components/Group89";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|273_21596)">
          <Group89
            line4="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-1@1x.svg"
            line5="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-1@1x.svg"
            line6="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-1@1x.svg"
            line7="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-1@1x.svg"
            group="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-103@2x.svg"
            line8="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-1@1x.svg"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
