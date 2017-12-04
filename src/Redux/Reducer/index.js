const reducer = (state='',info)=>{
		switch(info.type){
			case "addsome":
			return info.payload;
			default : return state;
		}

}


export default reducer;