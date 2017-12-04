import React from "react"
import "./index.scss"
import axios from "axios"
import {NavLink} from "react-router-dom"



class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            getall:null,
            nowlist:null,
            searchcon:"",
            searchend:[]
        }
    }

    componentWillMount(){
        //进入时加载第一页
        axios.get("/v4/api/film/now-playing?page=1&count=9999").then(res=>{
            console.log(res.data.data.films);
            this.setState((prevState,props)=>({
            nowlist:res.data.data.films,
            searchend:res.data.data.films
            }))
        })
    }
    render() {
        return (
        	<div id="oSearch">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511981593211&di=2fdaa17a5331143352326e100a242d1c&imgtype=0&src=http%3A%2F%2Fimg.67.com%2Fupload%2Fimages%2F2013%2F07%2F31%2FeGlvbmdoYW5saW4xMzc1MjU4OTMy_8.jpg"/>
                <label htmlFor="cont">电影搜索</label>
                <input type="text" className="form-control" id="cont" placeholder="搜索框" ref="seacon"/>
                <button type="button" className="btn btn-warning" onClick={this.searchnow.bind(this)}>即刻搜索：)</button>
                
                <ul key={this.state.searchcon} id="searcon">
                
                    {
                    this.state.nowlist? 
                    <div>    
                    {
                        this.state.searchend.length!=0?
                        this.state.searchend.map(item=>
                        <NavLink to={`/details/${item.id}`} key={item.id}>
                        <li>
                            <img src={item.cover.origin} />
                            <h6>{item.grade}</h6>
                            <h3>{item.name}</h3>
                            <p>{item.intro}</p>
                        </li>
                        </NavLink>
                        ):<div>没有找到相关电影</div>
                    }</div>:null
                    }
                </ul>
            </div>
        )
    }

    searchnow(){
        var val=this.refs.seacon.value;
        var arr=[];
        console.log(val);
        for(var i=0;i<this.state.nowlist.length;i++){
            if(this.state.nowlist[i].name.indexOf(val)!=-1){
                arr.push(this.state.nowlist[i]);
            }
        }
        console.log(arr);
        this.setState({
            searchcon:val,
            searchend:arr
        })
    }



}

export default Card;
