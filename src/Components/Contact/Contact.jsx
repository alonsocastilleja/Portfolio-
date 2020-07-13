import React, { Component } from 'react';
import Sidebar from '../Utilities/Sidebar'
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact">
                    <div className="contact__container">
                        <form name="htmlform" method="post" action="https://formsubmit.co/castilleja.alonso@gmail.com">
                            <input type="text" name="first_name" placeholder="NAME" required></input>
                            <input  type="email" name="email" placeholder="MAIL" required></input>
                            <textarea name="comments" placeholder="MESSAGE" required ></textarea>
                            <button name="send" type="submit" className="contact__submit-btn">SEND</button>
                        </form> 
                    </div>
                    <Sidebar />
                </section>
            </div>
        );
    }
}

export default Contact;