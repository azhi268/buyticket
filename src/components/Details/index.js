import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import "@/assets/index.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import axios from "axios"

import  Navbar from "../Common/Navbar"
import  Sidebar  from "../Common/Sidebar"

// 共有组件导航栏
// 
//用redux包装组件 
import {connect} from "react-redux";
// 
// 

class Details extends React.Component {

    constructor() {
        super();
        this.state={
            showside:false,
            oDetail:null
        }
    }

    componentWillMount(){
        // console.log(this.props.match.params.newid);
        // 获取并将影片信息保存至state
        axios.get(`/v4/api/film/${this.props.match.params.newid}`).then(res=>{
            // console.log(res.data.data.film);
            this.setState({
                oDetail:res.data.data.film
            })
            console.log(this.state.oDetail);
        })
    }

    render() {
        return (
        	<div id="details">
            <Navbar event={()=>{
                this.setState({
                    showside:!this.state.showside
                })
            }}></Navbar>
            
            <Sidebar ishow={this.state.showside}></Sidebar>

            {
                this.state.oDetail?
                <div>
                <img src={this.state.oDetail.cover.origin}/>
                <div id="introTitle">
                    <span></span>
                    影片简介({this.state.oDetail.name})
                    <p></p>
                    <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{this.state.oDetail.director}</p>
                    <p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
                        {
                            this.state.oDetail.actors.map(item=>
                                <a key={item.name}>{item.name}&nbsp;|&nbsp;</a>
                            )
                        }
                    </p>
                    <p>地区语言：
                        {this.state.oDetail.nation}({this.state.oDetail.language})
                    </p>
                    <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{this.state.oDetail.category}</p>
                    <p>上映日期：
                    {
                        1?
                        new Date(parseInt(this.state.oDetail.premiereAt)).toLocaleString().replace(/:\d{1,2}$/,' ')
                        :null
                    }
                    </p>
                    <p>{this.state.oDetail.synopsis}</p>
                </div>
                </div>
                :null
            }
            <button onClick={this.fuck.bind(this)}>立即购买</button>


            </div>
        );
    }
    fuck(){
        if(localStorage.getItem("cartlist")){
            var getmen=JSON.parse(localStorage.getItem("cartlist"));
            var len=getmen.length;
            var findit=0;
            for(var i=0;i<len;i++){
                if(getmen[i].name==this.state.oDetail.name){
                    var oend=getmen;
                    oend[i].nums++;
                    localStorage.setItem("cartlist",JSON.stringify(oend));
                    findit=1;
                }
            }
            if(!findit){
                var oend=getmen;
                oend.push(this.state.oDetail);
                oend[i].nums=1;
                localStorage.setItem("cartlist",JSON.stringify(oend));
            }
        }else{
            var oend=[];
            var cons=this.state.oDetail;
            cons.nums=1;
            oend.push(cons);
            localStorage.setItem("cartlist",JSON.stringify(oend));
        }
        
    }

}

export default connect(
    null,
    {
        addCart:(obj)=>{
            return {
                type:"addsome",
                payload:obj
            }
        }
    }
    )(Details);
