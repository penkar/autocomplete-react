var Title = require('./title.js');

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

var List1 = React.createClass({
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
			if(title.toLowerCase().indexOf(current) !== -1){
				divs.push(React.createElement( Title,    { titleClick:titleClick, title:title }) );
			}
		});
		return ( 
			React.createElement('div', {className:'obj'},
				React.createElement('input', {value: this.state.current, className: 'autoComplete', onChange: this._onChange}),
				React.createElement('br', null),
				divs 
			)
		);
	}
});

module.exports = List1