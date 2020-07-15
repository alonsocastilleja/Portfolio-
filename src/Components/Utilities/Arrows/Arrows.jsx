import React from 'react';
import { Link } from "react-scroll";
import './Arrows.css';

const Arrow = (props) => {
    console.log(props)
        return (
            <div>
                <Link to={props.down} 
                      className="arrow bounce"
                      smooth={true}
                      spy={true}
                >
                    <img src={props.arrow} alt="transition arrow"></img>
                </Link>
            </div>
        );
    }


export default Arrow;