import React from 'react';
import './contact.css'
import Footer from '../Utilities/Footer/Footer';

const Contact = (props) => {
        return (
            <div>
                <section id="contact">
                    <div className="contact__title">
                        <h2>Want to get in touch with me?</h2>
                        <p className="contact__subheading">Please fill out the form below and I will respond to your as soon as possible!</p>
                    </div>
                    <div className="contact__container">
                        <form name="htmlform" method="post" action="https://formsubmit.co/castilleja.alonso@gmail.com">
                            <input type="text" name="first_name" placeholder="NAME" required></input>
                            <input  type="email" name="email" placeholder="MAIL" required></input>
                            <textarea name="comments" placeholder="MESSAGE" required ></textarea>
                            <button name="send" type="submit" className="contact__submit-btn">SEND</button>
                        </form> 
                    </div>
                    <Footer up={props.up} arrow={props.arrow} style={props.style} />
                </section>
            </div>
        );
    }

export default Contact;