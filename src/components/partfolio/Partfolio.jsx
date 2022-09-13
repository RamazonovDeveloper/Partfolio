import React from 'react';

import './partfolio.css'

import gif from '../../assets/Tamal-Sen.gif'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.webp'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'

const Partfolio = () => {
    return (
        <section id='#partfolio'>
            <h5>My Recent Work</h5>
            <h2>Partfolio</h2>

            <div className="container partfolio__container">
                <article className='partfolio__item'>
                    <div className="partfolio__item-image">
                        <img src={img1} alt="" />
                    </div>
                    <h3>This is a partfolio item title</h3>
                    <div className='partfolio__item-cta'>
                        <a href="https://github.com/" className='btn' target='_blank'>Git Hub</a>
                        <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='partfolio__item'>
                    <div className="partfolio__item-image">
                        <img src={img2} alt="" />
                    </div>
                    <h3>This is a partfolio item title</h3>
                    <div className='partfolio__item-cta'>
                        <a href="https://github.com/" className='btn' target='_blank'>Git Hub</a>
                        <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='partfolio__item'>
                    <div className="partfolio__item-image">
                        <img src={img3} alt="" />
                    </div>
                    <h3>This is a partfolio item title</h3>
                    <div className='partfolio__item-cta'>
                        <a href="https://github.com/" className='btn' target='_blank'>Git Hub</a>
                        <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='partfolio__item'>
                    <div className="partfolio__item-image">
                        <img src={img5} alt="" />
                    </div>
                    <h3>This is a partfolio item title</h3>
                    <div className='partfolio__item-cta'>
                        <a href="https://github.com/" className='btn' target='_blank'>Git Hub</a>
                        <a href="https://dribbble.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Partfolio;
