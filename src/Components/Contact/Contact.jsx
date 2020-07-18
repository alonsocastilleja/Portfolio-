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
                            <label for="full name">      
                                <input type="text" name="first_name" placeholder="NAME" required></input>
                            </label>
                            <label for="email address">
                                <input  type="email" name="email" placeholder="EMAIL" required></input>
                            </label>
                            <label for="comments or questions">
                                <textarea name="comments" placeholder="MESSAGE" required ></textarea>
                            </label>
                            <button name="send" type="submit" className="contact__submit-btn">SEND</button>
                        </form> 
                    </div>
                </section>
            </div>
        );
    }

export default Contact;