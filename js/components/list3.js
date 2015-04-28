var exampleData = {
	titles: [
		'Mexican Black Bean Soup',
		'Eggplant Babakanoosh',
		'Bathingan bel Khal Wel thome',
		'Lebanese Tabbouleh',
		'BabaGhanooj',
		'Falfafel',
		'Pita Bread',
		'Kebab Koubane',
		'Moroccan Yogurt Dip',
		'Persian Cutlet',
		'Omlet',
		'Hommas Balil',
		'Marghareta Pizza',
		'Cannoli',
		'North Italian Cannoli',
		'Iced Florentine',
		'Artichoke Hummus',
		'Baked White Bean Dip',
		'Black Bean Dip',
		'Blood Orange and Green Olive Salad',
		'Bruschetta Three Ways',
		'Chili Garlic Corn Chips',
		'Chilled Ginger Cantaloupe Soup',
		'Chipotle Bacon Deviled Eggs',
		'Coconut Shrimp Poppers',
		'Creamy Blue Cheese Dip',
		'Deviled Eggs',
		'Herbed Cheddar Parmesan Crisps',
		"Kettle Corn",
		'Maple-Rosemary Glazed Walnuts',
		'Nando’s Honey Garlic Wings',
		'Pickled Serrano Chiles',
		'Potato Taquitos',
		'Pumpkin Spice Cream Cheese Spread',
		'Roasted Red Pepper Hummus',
		'Rosemary Garlic Sweet Potato Fries',
		'Slow-Roasted Cherry Tomatoes',
		'Smoked Tuna Dip',
		'Spicy Pickled Garlic',
		'Spinach and Feta Turnovers',
		'Sun-dried Tomato Hummus',
		'Spice Roasted Almonds',
		'Tzatziki Sauce (cucumber yogurt dip)',
		'Whole Wheat Pita Chips'
	]
}

var DivTitle = React.createClass({
	displayName: 'DivTitle',
	titleClick: function(){
		console.log(this.props)
		this.props.titleClick(this.props.title);
	},
	render: function(){
		return (
			React.createElement('div', {onClick: this.titleClick}, this.props.title)
		)
	}
})

var List3 = React.createClass({
	displayName: 'List1',
	getInitialState: function(){
		return ({
			titles: exampleData.titles,
			current: ''

		});
	},
	titleClick: function(title){
		this.setState({
			current:title
		});
	},
	_onChange: function(event){
		this.setState({
			current:event.target.value
		});
	},
	render: function(){
		document.aaa = this;
		var divs = [];
		var data = this.state.titles;
		var current = this.state.current.toLowerCase() || '';
		var titleClick = this.titleClick;
		var _onChange = this.onChange
		data.filter(function(title){
			if(title.toLowerCase().indexOf(current) !== -1 && current){
				divs.push(React.createElement(DivTitle, {title:title, titleClick:titleClick }) );
			}
		});
		return ( 
			React.createElement('div', {className:'pure-u-7-24 ex3'},
				React.createElement('p', null, this.props.title),
				React.createElement('input', {value: this.state.current, className: 'autoComplete', onChange: this._onChange}),
				React.createElement('div', {className:'drop'}, divs )
			)
		);
	}
});

module.exports = List3