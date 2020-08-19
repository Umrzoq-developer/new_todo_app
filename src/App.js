import React from 'react';
import {Switch, Route} from 'react-router-dom';

//pages
import Home from "./pages/Home";
import Done from "./pages/Done";
import NotDone from "./pages/NotDone";

const App = () => {
    return (
        <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/done' component={Done} />
              <Route path='/undone' component={NotDone} />
            </Switch>
        </div>
    );
};

export default App;
