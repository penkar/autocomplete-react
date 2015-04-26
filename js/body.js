var exampleData = {
	titles: [
		'Mexican Black Bean Soup',
		'Eggpland and Roasted Garlic Babakanoosh',
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
		'Baked White Bean Dip with Rosemary and Parmesan',
		'Black Bean Dip',
		'Blood Orange and Green Olive Salad',
		'Bruschetta Three Ways',
		'Chili Garlic Corn Chips',
		'Chilled Ginger Cantaloupe Soup',
		'Chipotle Bacon Deviled Eggs',
		'Coconut Shrimp Poppers with Chili Mango Cream',
		'Creamy Blue Cheese Dip with Lemon and Chives',
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
		'Sweet and Spicy Chinese Five Spice Roasted Almonds',
		'Tzatziki Sauce (cucumber yogurt dip)',
		'Whole Wheat Pita Chips'
	]
}

var List = React.createClass({
	displayName: 'List',
	getInitialState: function(){
		return (exampleData)
	},
	render: function(){
		var options = [];
		var data = this.state.titles;
		console.log(this.state);
		for(var i =0, iLen = data.length; i < iLen; i++ ){
			options.push(React.createElement('option', {value: data[i]}, data[i]))
		}
		return ( React.createElement('select', null, options) );
	}
})

var ListItem = React.createClass({
	displayName: 'ListItem',
	render: function(){
		return ( React.createElement('div', null, 'ListItem') )
	}
})


// var List = require('./components/list.js')

var Body = React.createClass({
	displayName: 'Body',
	render: function(){
		return(
			React.createElement(List, null
			)
		)
	}
})

React.render(
	React.createElement(Body, null),
	document.getElementById('mount')
)