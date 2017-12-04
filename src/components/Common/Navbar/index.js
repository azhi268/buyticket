import React from "react"
import "./index.scss"
import "@/assets/iconfont/iconfont.css"


class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<nav>
                <div className="left">
                <i className="iconfont icon-leimupinleifenleileibie--" onClick={this.handleside.bind(this)}></i>
                <span ref="oTitle"></span>
                </div>
                <div className="right">
                <span>杭州</span>
                <i className="iconfont icon-gerenzhongxin"></i>
                </div>
            </nav>
        );
    }

    handleside(){
        this.props.event();
    }

    componentDidMount(){
        this.refs.oTitle.innerText="不二电影";
    }

}

export default Navbar;
