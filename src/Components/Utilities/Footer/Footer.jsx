import React from 'react';
import './footer.css';
import Arrow from '../Arrows/Arrows';

const Footer = (props) => {
        return (
            <div>
                   <footer className="footer">
                        <ul className="footer__links">
                            <a aria-label="email" href="mailTo:castilleja.alonso@gmail.com"><i className="fa fa-envelope"></i></a>
                            <a aria-label="codepen" href={'https://codepen.io/ACasNin'}><i className="fa fa-codepen"></i></a>
                            <a aria-label="github" href={'https://github.com/alonsocastilleja'} rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a aria-label="linkedin" href={'https://www.linkedin.com/in/alonso-castilleja-nino-aa3924137/'} rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </ul>
                        <h3 className="footer__updateDay">&copy; Last updated: 7-17-20</h3>
                        <Arrow down={props.up} arrow={props.arrow} farRight={true}/>
                    </footer>
            </div>
        );
    }

export default Footer;