import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"


class Film extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
            Film
            <ul>
                <li><NavLink to="/film/nowplaying">正在上映</NavLink></li>
                <li><NavLink to="/film/comingsoon">即将上映</NavLink></li>
            </ul>
            {
                this.props.children
            }
            </div>
        );
    }
}

export default Film;
