import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import ContactPage from './components/contact-page';
import Projects from './components/projects';
import Body from './components/body';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <Router>
          <header>
            <div className="img-placeholder">
              <h1>
                Frontend 
                <br />
                Web
                <br />
                Developer
              </h1>
            </div>
            <nav>
                <ul>
                    <Link to ="/" className="list-item">Home</Link>
                    <Link to ="/projects" className="list-item">Projects</Link>
                    <Link to ="/contact" className="list-item">Contact</Link>
                </ul>
            </nav>
            </header>
            <Route path="/" exact component={Body} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={ContactPage} />
        </Router>
    )
  }
}

export default App;
