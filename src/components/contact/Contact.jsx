import React from 'react';
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail  className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>ramazonovferuz01@gmail.com</h5>
                        <a href="mailto:ramazonovferuz01@gmail.com">Send a massage</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine  className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>ramazonovferuz</h5>
                        <a href="https://m.mi.ramazonovferuz">Send a massage</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href="mailto:ramazonovferuz01@gmail.com">Send a massage</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' required rows="10"></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
