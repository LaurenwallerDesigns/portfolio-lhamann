import React from 'react';
import Nav from './components/nav';
import About from './components/about';
import Button from './components/lang-btn';
import Contact from './components/so-btn';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
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
          <Nav />
        </header>
        <About />
        <section className="lang-section">
          <Button />
        </section>
        <section className="contact-section">
          <Contact />
        </section>
      </React.Fragment>
    )
  }
}

export default App;
