import React from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
import axios from "axios"


class Nowplaying extends React.Component {

    constructor() {
        super();
        this.state={
            nowlist:[],
            page:1
        }
    }
    
    componentWillMount(){
        //进入时加载第一页
        axios.get("/v4/api/film/now-playing?page="+this.state.page+"&count=3").then(res=>{
            console.log(res.data.data.films);
            this.setState({
                nowlist:res.data.data.films
            })
        })
    }

    render() {
        return (
        	<div id="now">
            <h5>热映中</h5>
                <ul key={this.state.page}>
                    {
                    this.state.nowlist.map(item=>
                    <NavLink to={`/details/${item.id}`} key={item.id}>
                    <li>
                        <img src={item.cover.origin} />
                        <h6>{item.grade}</h6>
                        <h3>{item.name}</h3>
                        <p>{item.intro}</p>
                    </li>
                    </NavLink>
                    )
                    }
                </ul>
                <button onClick={this.cutsomenow.bind(this)}>上一页</button>
                <button onClick={this.addmorenow.bind(this)}>下一页</button>
            </div>
        );
    }

    //编程式导航跳入电影详情面



    // 下一页的函数部分
    addmorenow(){
        axios.get("/v4/api/film/now-playing?page="+(this.state.page+1)+"&count=3").then(res=>{
            console.log(res.data.data.films);
            this.setState({
                nowlist:res.data.data.films
            })
        })
        this.setState((prevState,props)=>({
            page:prevState.page+1
        }))
        // console.log(this.state.page);
        // console.log(this.state.nowlist);
    }
    // 上一页的函数部分
    cutsomenow(){
        this.state.page>1?
        axios.get("/v4/api/film/now-playing?page="+(this.state.page-1)+"&count=3").then(res=>{
            console.log(res.data.data.films);
            this.setState({
                nowlist:res.data.data.films
            })
            this.setState((prevState,props)=>({
                page:prevState.page-1
            }))
        })
        :null
        //如页码大于1则减
        // console.log(this.state.page);
        // console.log(this.state.nowlist);
    }    

}

export default Nowplaying;
