import React from "react"
//创建组件需要用的模块
import "./index.scss"
//全局样式
import {NavLink} from "react-router-dom"
// 点击跳转路由的标签所需模块
import  Navbar from "../Common/Navbar"
import  Sidebar  from "../Common/Sidebar"

// 共有组件导航栏


//

//

class App extends React.Component {

    constructor() {
        super();
        this.state={
            showside:false
        }
    }

    render() {
        return (
        	<div>
            
            <Navbar event={()=>{
                this.setState({
                    showside:!this.state.showside
                })
            }}></Navbar>
            
            <Sidebar ishow={this.state.showside}  events={()=>{
                this.setState({
                    showside:!this.state.showside
                })
            }}></Sidebar>

            <section>
            {
                this.props.children
            }
            </section>
            </div>
        );
    }
}



export default App;
