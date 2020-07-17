import React from 'react';
import './footer.css';
import Arrow from '../Arrows/Arrows';

const Footer = (props) => {
        return (
            <div>
                <div>
                   <div className="footer">
                        <ul className="footer__links">
                            <a href="mailTo:castilleja.alonso@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a href={'/'}><i className="fa fa-codepen"></i></a>
                            <a href={'https://github.com/alonsocastilleja'} rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a href={'https://www.linkedin.com/in/alonso-castilleja-nino-aa3924137/'} rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </ul>
                        <Arrow down={props.up} arrow={props.arrow} farRight={true}/>
                    </div>
                </div>
            </div>
        );
    }

export default Footer;