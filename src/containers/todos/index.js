import React from 'react';
import { Input ,Button,Row} from 'antd';
import "./style.css";

const InputGroup = Input.Group;

class Todos extends React.Component{
	state = {
		todos:[],
		value:""
	}
	handleAdd=()=>{
		this.setState({
			todos: this.state.todos.concat([this.state.value])
		});
	}
	handeChange=(event)=>{
		let value = event.target.value.trim();
		this.state.value = value
	}
	componentDidMount(){
	}
	render(){
		console.log(12312)
		return (
			<div style={{marginTop:20,marginLeft:200}}>
				<Row>
					<Input placeholder="add todos" onBlur={this.handeChange} defaultValue="" style={{ width: 200,marginRight:2}} />
					<Button type="primary" onClick={this.handleAdd}>添加</Button>
				</Row>
				<ul>
                    {this.state.todos.map(function(item,index){
            			return <li key={index}>{item}</li>;
        			})}
                </ul>
			</div>
		)
	}
}
export default Todos;