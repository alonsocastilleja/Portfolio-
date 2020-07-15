import React from 'react';
import './footer.css';
import Arrow from '../Arrows/Arrows';

const Footer = (props) => {
        return (
            <div>
                <div>
                   <div className="footer">
                        <ul className="footer__links">
                            <a href="mailTo:castilleja.alonso@gmail.com"><i class="fa fa-envelope"></i></a>
                            <a href={'/'}><i class="fa fa-codepen"></i></a>
                            <a href={'https://github.com/alonsocastilleja'} rel="noopener noreferrer" target="_blank"><i class="fa fa-github"></i></a>
                            <a href={'https://www.linkedin.com/in/alonso-castilleja-nino-aa3924137/'} rel="noopener noreferrer" target="_blank"><i class="fa fa-linkedin"></i></a>
                        </ul>
                        <Arrow down={props.up} arrow={props.arrow} style={props.style} />
                    </div>
                </div>
            </div>
        );
    }

export default Footer;