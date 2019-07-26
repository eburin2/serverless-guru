import React from 'react';
import Header from './Header';
import Blog from './Blog';
import BlogPage from './BlogPage';
import Photos from './Photos';
import Home from './Home';
import Videos from './Videos';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {
      return (
        <Router>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <Header />
              </div>
              <Route path="/team" component={Photos} />
            </div>
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:blogId" render={(props) =>
            <BlogPage {...props} />}/>
            <Route path="/videos" component={Videos} />
            <Route path="/" exact component={Home} />
          </div>
        </Router>
      );
  }

export default App;
