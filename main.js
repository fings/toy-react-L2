import {createElement, Component, render} from "./toy-react.js"

class MyComponent extends Component {
	constructor(){
		super();
		this.state = {
			a: 1,
			b: 2
		}
	}
	render(){
		return(
			<div>
				<h1>my component</h1>
				<button onclick={()=>{ this.setState({a: this.state.a + 1})}}>add</button>
				<div>{this.state.a.toString()}</div>
				<div>{this.state.b.toString()}</div>
			</div>
		);
	}
}



render(
	<MyComponent id="id" class="class">
		<div>2020</div>
		<div>2019</div>
		<div>2018</div>
	</MyComponent>,
	document.getElementById("app")
)