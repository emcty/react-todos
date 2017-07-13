import React from 'react';
import {createStore} from "redux";

import { Layout } from 'antd';
import Todos from "../Todos";

import reducers from "../../reducers";
const { Header, Footer, Sider, Content} = Layout;


let store = createStore(reducers);

class App extends React.Component{

	state = {
		item:store.getState()
	}
	handleAddItem=()=>{
		store.dispatch({
			type:"ADD_TODO",
			text:"aaa"
		});
		console.log(this.state)
	}

	componentDidMount(){
		console.log(store)
		console.log(this.state.item);
	}
	render(){
		return (
		<div>
	      <Todos addItem={this.handleAddItem}/>
  		</div>
		)
	}
}
export default App;