import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import "@/assets/index.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"


class Sidebar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
        	<div>
        	<ReactCSSTransitionGroup 
        	 transitionName="example"
 			 transitionEnterTimeout={500}
 			 transitionLeaveTimeout={300}>
        	{
        		this.props.ishow?
	        	<aside onClick={this.handleside.bind(this)}>
	        		<ul>
		                <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
		                <li><NavLink to="/search" activeClassName="active">搜索影片</NavLink></li>
		                <li><NavLink to="/shopcart" activeClassName="active">购物车</NavLink></li>
	            	</ul>
	            </aside>
        		:null
        	}
        	</ReactCSSTransitionGroup>
            </div>
        );

    }
        handleside(){
        this.props.events();
        }
}

export default Sidebar;
