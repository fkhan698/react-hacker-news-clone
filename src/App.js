import React from "react";
import "./styles.css";
import TopStoriesContainer from "./components/TopStoriesContainer.js";
import Header from './components/Header.js'
import { Switch, Route} from 'react-router-dom';

import NewStories from "./components/NewStories.js";
import User from './components/User'
import Comments from './components/Comments.js'






export default function App() {

    return(
      <>
        <Header />
        <TopStoriesContainer />,
        <Switch>
          <Route exact path="/" component={TopStoriesContainer}></Route>
          <Route exact path="/new" component={NewStories}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/comments/:id" component={Comments}></Route>
        </Switch>
      </>
    ) 
  }