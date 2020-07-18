import React from 'react';
import './contact.css'

const Contact = (props) => {
        return (
            <div>
                <section id="contact">
                    <div className="contact__title">
                        <h2 className="contact__heading"><span className="char__font">&#60;</span> Send me a message <span className="char__font"> &#62; </span></h2>
                        <p className="contact__subheading">Please fill out the form below and I will respond to your as soon as possible!</p>
                    </div>
                    <div className="contact__container">
                        <form name="htmlform" method="post" action="https://formsubmit.co/castilleja.alonso@gmail.com">
                            <label for="full name">      
                                <input type="text" name="first_name" placeholder="NAME" required></input>
                            </label>
                            <label for="email address">
                                <input  type="email" name="email" placeholder="MAIL" required></input>
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