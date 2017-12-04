import React from "react"
import "./index.scss"

import {connect} from "react-redux"


class Shopcart extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            getol:null
        }
    }

    componentWillMount(){
        this.setState({
            getol:JSON.parse(localStorage.getItem("cartlist"))
        })
    }

    render() {
        return (
        	<div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>宣传海报</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>
        {
        this.state.getol?
        this.state.getol.map(item=>
            <tr key={item.id+1}>
              <td>{item.name}</td>
              <td><img src={item.cover.origin}/></td>
              <td>
              <button onClick={this.cutcart.bind(this,item)}>&nbsp;-&nbsp;</button>
              <span ref={item.id}>{item.nums}</span>
              <button onClick={this.addcart.bind(this,item)} key={item.nums}>&nbsp;+&nbsp;</button>
              <br/>
              <button type="button" className="btn btn-danger" onClick={this.delitem.bind(this,item)}>删除</button>
              </td>
            </tr>
        ):null
        }
      </tbody>
    </table>
            </div>
        )
}

    addcart(item){
        // console.log(this.refs[item.id].innerText);
        this.refs[item.id].innerText++;
        // console.log(item);
        item.nums++;
        // console.log(this.state.getol)
        localStorage.setItem("cartlist",JSON.stringify(this.state.getol));
    }

    cutcart(item){
        if(item.nums>1){
        // console.log(this.refs[item.id].innerText);
        this.refs[item.id].innerText--;
        // console.log(item);
        item.nums--;
        // console.log(this.state.getol)
        localStorage.setItem("cartlist",JSON.stringify(this.state.getol));
        }
    }
    delitem(item){
        localStorage.setItem("cartlist",JSON.stringify(this.state.getol));
    }

}
export default connect(
    (state)=>{
        console.log(state)
        return {
            title:state
        }
    },null
    )(Shopcart);
