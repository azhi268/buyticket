import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"


class Comingsoon extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        axios.get("/v4/api/film/now-playing?page=1&count=3").then(res=>{
            console.log(res.data);
            this.setState({
                bannerlist:res.data.data.billboards
            })
        })
    }

    render() {
        return (
        	<div>
                Comingsoon
            </div>
        );
    }
}

export default Comingsoon;
