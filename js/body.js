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

var Title = React.createClass({
	displayName: 'Title',
	render: function(){
		return React.createElement('div', {onClick: this._titleClick}, this.props.title)
	},
	_titleClick: function(){
		console.log(this.props)
		// this.props._titleClick(this.props.title);
	}
})


var ListItem = React.createClass({
	displayName: 'ListItem',
	render: function(){
		return ( React.createElement('option', {value: this.props.val}, this.props.val) )
	}
})

var List = React.createClass({
	displayName: 'List',
	getInitialState: function(){
		return ({
			titles: exampleData.titles,
			current: ''

		})
	},
	_titleClick: function(title){
		console.log('title')
		this.setState({
			current:title
		})
	},
	_onChange: function(event){
		this.setState({
			current:event.target.value
		})
	},
	render: function(){
		var opts = [], divs = [];
		var data = this.state.titles;
		var current = this.state.current || '';
		data.filter(function(title){
			if(title.toLowerCase().indexOf(current) !== -1){
				opts.push(React.createElement( ListItem, { val:title, key:title }) )
				divs.push(React.createElement( Title, { title:title, key:title, _titleClick:this._titleClick }) );
			}
		})
		return ( 
			React.createElement('div', null,
				React.createElement('input', {className: 'autoComplete', onChange: this._onChange}),
				React.createElement('br', null),
				React.createElement('select', {className: 'autoComplete'}, opts),
				divs 
			)
		);
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