import React from 'react';
import './App.css';
import Header from './Header';

class App extends React.Component {

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <Header />
            </div>
          </div>
          <div className="row">

          </div>
        </div>
      );
    }
  }

export default App;
