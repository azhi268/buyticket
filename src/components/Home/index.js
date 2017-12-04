import React from "react"
import "./index.scss"
import Banners from  "@/components/Banners"
import Nowplaying from "@/components/Film/Nowplaying"
import Comingsoon from "@/components/Film/Comingsoon"


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
                <Banners></Banners>
                <Nowplaying></Nowplaying>
                <Comingsoon></Comingsoon>
            </div>
        );
    }
}

export default Home;
