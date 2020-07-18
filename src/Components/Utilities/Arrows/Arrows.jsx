import React from 'react';
import { Link } from "react-scroll";
import './Arrows.css';

const Arrow = (props) => {
        const classes = ['arrow', 'bounce'];
        
        if(props.farRight) {
            classes.push('farRight')
        }
                      
        return (
            <div>
                <Link to={props.down}
                      className={classes.join(' ')}
                      smooth={true}
                      spy={true}
                >
                    <img src={props.arrow} alt="transition arrow"></img>
                </Link>
            </div>
        );
    }


export default Arrow;