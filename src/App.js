import React from 'react';
import {Switch, Route} from 'react-router-dom';

//pages
import Home from "./pages/Home/Home";
import Done from "./pages/Done/Done";
import NotDone from "./pages/UnDone/NotDone";

//context
import TodoProvider from "./context/todoContext";
import Side from "./components/Side/Side";

const App = () => {
    return (
        <div className="App">
            <Side/>
            <Switch>
                <TodoProvider>
                    <Route exact path='/' component={Home}/>
                    <Route path='/done' component={Done}/>
                    <Route path='/undone' component={NotDone}/>
                </TodoProvider>
            </Switch>
        </div>
    );
};

export default App;
