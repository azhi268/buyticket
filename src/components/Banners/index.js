import React from "react"
import "./index.scss"
import axios from "axios"
import ReactSwipe from "react-swipe";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            bannerlist:[]
        }
    }
    
    componentDidMount() {

    }
    
    componentWillMount(){
        axios.get("/v4/api/billboard/home").then(res=>{
            console.log(res.data.data.billboards);
            this.setState({
                bannerlist:res.data.data.billboards
            })
        })
    }

    render() {
        return (
        	<div>
                <ReactSwipe className="carousel" 
                swipeOptions={{continuous:true,auto:2000}}
                key={this.state.bannerlist.length}>

                {
                    this.state.bannerlist.map(item=>
                        <img src={item.imageUrl} key={item.id}/>
                    )
                }

                </ReactSwipe>
            </div>
        );
    }


}

export default Card;
