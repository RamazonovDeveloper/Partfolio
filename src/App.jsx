import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience'
import Services from './components/sevices/Services';
import Partfolio from './components/partfolio/Partfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        // MAIN PART
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Partfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
