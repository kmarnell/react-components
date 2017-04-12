var GroceryList = (props) => (
	<ul>
		{props.items.map(item =>
			<GroceryListItem item={item} />
			)}
	</ul>
	);

var App = () => (
	<div>
		<h1>Grocery List</h1>
		<GroceryList items={['Avacados', 'Tomatoes']} />
	</div>
	);

class GroceryListItem extends React.Component {
	constructor (props){
		super(props);
		this.state = {
		done: false
	  	};
	}
	

	onGroceryItemHover() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		return(
			<li style={style} onMouseOver={this.onGroceryItemHover.bind(this)}>{this.props.item}</li>
			)
	}

}
ReactDOM.render(<App/>, document.getElementById("app"))