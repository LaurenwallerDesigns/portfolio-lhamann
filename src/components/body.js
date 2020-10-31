import React from 'react';
import About from './about';
import Contact from './so-btn';
import Button from './lang-btn';

function Body(props) {
    return (
        <section className="body">
            <About />
            <Button />
            <Contact />
        </section>
    )
}

export default Body;