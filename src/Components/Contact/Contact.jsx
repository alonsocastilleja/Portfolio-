import React from 'react';
import './contact.css'

const Contact = () => {
        return (
            <div>
                <section id="contact">
                    <div className="contact__title">
                        <h2 className="contact__heading"><span className="char__font">&#60;</span> Get in touch with me! <span className="char__font"> &#62; </span></h2>
                        <p className="contact__subheading">Fill out the form below and I'll get back to you promptly. </p>
                    </div>
                    <div className="contact__container">
                        <form name="htmlform" method="post" action="https://formsubmit.co/castilleja.alonso@gmail.com">
                            <label htmlFor="full name">
                                Name      
                                <input type="text" name="first_name" required></input>
                            </label>
                            <label htmlFor="email address">
                                Email
                                <input  type="email" name="email" required></input>
                            </label>
                            <label htmlFor="comments or questions">
                                Message
                                <textarea name="comments" required ></textarea>
                            </label>
                            <button name="send" type="submit" className="contact__submit-btn">SEND</button>
                        </form> 
                    </div>
                </section>
            </div>
        );
    }

export default Contact;