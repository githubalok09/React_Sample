import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SearchResults from './components/searchResult/searchResults';
import Home from './components/home';

const App = () => {
return(
    <Router>
        <div>
            <Route exact={true} path= "/" component = {Home}/>
            <Route exact={true} path= "/results" component  = {SearchResults}/>
        </div>
    </Router>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById("app"));