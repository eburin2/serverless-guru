import React from 'react';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import Home from './Home';
import Videos from './Videos';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
      return (
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <Header />
              </div>
              <Route path="/" exact component={Home}/>
            </div>
            <div>
              <Route path="/blog" component={Blog}/>
            </div>
            <div>
              <Route path="/videos" component={Videos}/>
            </div>
          </div>
        </Router>
      );
  }

export default App;
