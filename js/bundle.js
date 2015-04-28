(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Header = require('./components/header.js');
var List1 = require('./components/list1.js');
var List2 = require('./components/list2.js');
var List3 = require('./components/list3.js');

var Body = React.createClass({
	displayName: 'Body',
	render: function(){
		return(
			React.createElement('div', null, 
				React.createElement(Header, null),
				React.createElement('div', {className:'container'},
					React.createElement('div', {className:'pure-g'},
						React.createElement(List1, {title: 'Clickable Divs that disappear filled. ex 1'}),
						React.createElement(List2, {title: 'Drop Down Menu Option. ex 2'}),
						React.createElement(List3, {title: 'Clickable Divs that appear filled in. ex 3'})
					)
				)
			)
		);
	}
});

React.render(
	React.createElement(Body, null),
	document.getElementById('mount')
);
},{"./components/header.js":2,"./components/list1.js":3,"./components/list2.js":4,"./components/list3.js":5}],2:[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
	displaynName: 'Header',
	render: function(){
		return (
			React.createElement('div', {className:'header'}, 
				React.createElement('div', {className:'title'}, 'React AutoComplete Examples')
			)
		)
	}
})

module.exports = Header;
},{}],3:[function(require,module,exports){
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
			React.createElement('div', {className:'pure-u-7-24 ex1'},
				React.createElement('p', null, this.props.title),
				React.createElement('input', {value: this.state.current, className: 'autoComplete', onChange: this._onChange}),
				React.createElement('br', null),
				divs 
			)
		);
	}
});

module.exports = List1
},{"./title.js":7}],4:[function(require,module,exports){
var ListItem = require('./listitem.js')

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

var List2 = React.createClass({
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
		var opts = [];
		var data = this.state.titles;
		var current = this.state.current.toLowerCase() || '';
		var titleClick = this.titleClick;
		var _onChange = this.onChange
		data.filter(function(title){
			if(title.toLowerCase().indexOf(current) !== -1){
				opts.push(React.createElement( ListItem, { val:title, key:title }) )
			}
		});
		return ( 
			React.createElement('div', {className:'pure-u-7-24 ex2'},
				React.createElement('p', null, this.props.title),
				React.createElement('input', {value: this.state.current, className: 'autoComplete', onChange: this._onChange}),
				React.createElement('br', null),
				React.createElement('select', {className: 'autoComplete', onChange: this._onChange}, opts)
			)
		);
	}
});

module.exports = List2
},{"./listitem.js":6}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
var ListItem = React.createClass({
	displayName: 'ListItem',
	render: function(){
		return ( React.createElement('option', {value: this.props.val}, this.props.val) )
	}
});

module.exports = ListItem
},{}],7:[function(require,module,exports){
var Title = React.createClass({
	displayName: 'Title',
	render: function(){
		return React.createElement('div', {onClick: this.titleClick}, this.props.title);
	},
	titleClick: function(){
		this.props.titleClick(this.props.title);
	}
});

module.exports = Title
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwianMvYm9keS5qcyIsImpzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwianMvY29tcG9uZW50cy9saXN0MS5qcyIsImpzL2NvbXBvbmVudHMvbGlzdDIuanMiLCJqcy9jb21wb25lbnRzL2xpc3QzLmpzIiwianMvY29tcG9uZW50cy9saXN0aXRlbS5qcyIsImpzL2NvbXBvbmVudHMvdGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2hlYWRlci5qcycpO1xudmFyIExpc3QxID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xpc3QxLmpzJyk7XG52YXIgTGlzdDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGlzdDIuanMnKTtcbnZhciBMaXN0MyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9saXN0My5qcycpO1xuXG52YXIgQm9keSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdCb2R5Jyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybihcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzc05hbWU6J2NvbnRhaW5lcid9LFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzc05hbWU6J3B1cmUtZyd9LFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChMaXN0MSwge3RpdGxlOiAnQ2xpY2thYmxlIERpdnMgdGhhdCBkaXNhcHBlYXIgZmlsbGVkLiBleCAxJ30pLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Miwge3RpdGxlOiAnRHJvcCBEb3duIE1lbnUgT3B0aW9uLiBleCAyJ30pLFxuXHRcdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Mywge3RpdGxlOiAnQ2xpY2thYmxlIERpdnMgdGhhdCBhcHBlYXIgZmlsbGVkIGluLiBleCAzJ30pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblJlYWN0LnJlbmRlcihcblx0UmVhY3QuY3JlYXRlRWxlbWVudChCb2R5LCBudWxsKSxcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdW50Jylcbik7IiwidmFyIEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJIZWFkZXJcIixcblx0ZGlzcGxheW5OYW1lOiAnSGVhZGVyJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3NOYW1lOidoZWFkZXInfSwgXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzc05hbWU6J3RpdGxlJ30sICdSZWFjdCBBdXRvQ29tcGxldGUgRXhhbXBsZXMnKVxuXHRcdFx0KVxuXHRcdClcblx0fVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7IiwidmFyIFRpdGxlID0gcmVxdWlyZSgnLi90aXRsZS5qcycpO1xuXG52YXIgZXhhbXBsZURhdGEgPSB7XG5cdHRpdGxlczogW1xuXHRcdCdNZXhpY2FuIEJsYWNrIEJlYW4gU291cCcsXG5cdFx0J0VnZ3BsYW50IEJhYmFrYW5vb3NoJyxcblx0XHQnQmF0aGluZ2FuIGJlbCBLaGFsIFdlbCB0aG9tZScsXG5cdFx0J0xlYmFuZXNlIFRhYmJvdWxlaCcsXG5cdFx0J0JhYmFHaGFub29qJyxcblx0XHQnRmFsZmFmZWwnLFxuXHRcdCdQaXRhIEJyZWFkJyxcblx0XHQnS2ViYWIgS291YmFuZScsXG5cdFx0J01vcm9jY2FuIFlvZ3VydCBEaXAnLFxuXHRcdCdQZXJzaWFuIEN1dGxldCcsXG5cdFx0J09tbGV0Jyxcblx0XHQnSG9tbWFzIEJhbGlsJyxcblx0XHQnTWFyZ2hhcmV0YSBQaXp6YScsXG5cdFx0J0Nhbm5vbGknLFxuXHRcdCdOb3J0aCBJdGFsaWFuIENhbm5vbGknLFxuXHRcdCdJY2VkIEZsb3JlbnRpbmUnLFxuXHRcdCdBcnRpY2hva2UgSHVtbXVzJyxcblx0XHQnQmFrZWQgV2hpdGUgQmVhbiBEaXAnLFxuXHRcdCdCbGFjayBCZWFuIERpcCcsXG5cdFx0J0Jsb29kIE9yYW5nZSBhbmQgR3JlZW4gT2xpdmUgU2FsYWQnLFxuXHRcdCdCcnVzY2hldHRhIFRocmVlIFdheXMnLFxuXHRcdCdDaGlsaSBHYXJsaWMgQ29ybiBDaGlwcycsXG5cdFx0J0NoaWxsZWQgR2luZ2VyIENhbnRhbG91cGUgU291cCcsXG5cdFx0J0NoaXBvdGxlIEJhY29uIERldmlsZWQgRWdncycsXG5cdFx0J0NvY29udXQgU2hyaW1wIFBvcHBlcnMnLFxuXHRcdCdDcmVhbXkgQmx1ZSBDaGVlc2UgRGlwJyxcblx0XHQnRGV2aWxlZCBFZ2dzJyxcblx0XHQnSGVyYmVkIENoZWRkYXIgUGFybWVzYW4gQ3Jpc3BzJyxcblx0XHRcIktldHRsZSBDb3JuXCIsXG5cdFx0J01hcGxlLVJvc2VtYXJ5IEdsYXplZCBXYWxudXRzJyxcblx0XHQnTmFuZG/igJlzIEhvbmV5IEdhcmxpYyBXaW5ncycsXG5cdFx0J1BpY2tsZWQgU2VycmFubyBDaGlsZXMnLFxuXHRcdCdQb3RhdG8gVGFxdWl0b3MnLFxuXHRcdCdQdW1wa2luIFNwaWNlIENyZWFtIENoZWVzZSBTcHJlYWQnLFxuXHRcdCdSb2FzdGVkIFJlZCBQZXBwZXIgSHVtbXVzJyxcblx0XHQnUm9zZW1hcnkgR2FybGljIFN3ZWV0IFBvdGF0byBGcmllcycsXG5cdFx0J1Nsb3ctUm9hc3RlZCBDaGVycnkgVG9tYXRvZXMnLFxuXHRcdCdTbW9rZWQgVHVuYSBEaXAnLFxuXHRcdCdTcGljeSBQaWNrbGVkIEdhcmxpYycsXG5cdFx0J1NwaW5hY2ggYW5kIEZldGEgVHVybm92ZXJzJyxcblx0XHQnU3VuLWRyaWVkIFRvbWF0byBIdW1tdXMnLFxuXHRcdCdTcGljZSBSb2FzdGVkIEFsbW9uZHMnLFxuXHRcdCdUemF0emlraSBTYXVjZSAoY3VjdW1iZXIgeW9ndXJ0IGRpcCknLFxuXHRcdCdXaG9sZSBXaGVhdCBQaXRhIENoaXBzJ1xuXHRdXG59XG5cbnZhciBMaXN0MSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdMaXN0MScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKHtcblx0XHRcdHRpdGxlczogZXhhbXBsZURhdGEudGl0bGVzLFxuXHRcdFx0Y3VycmVudDogJydcblxuXHRcdH0pO1xuXHR9LFxuXHR0aXRsZUNsaWNrOiBmdW5jdGlvbih0aXRsZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OnRpdGxlXG5cdFx0fSk7XG5cdH0sXG5cdF9vbkNoYW5nZTogZnVuY3Rpb24oZXZlbnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudDpldmVudC50YXJnZXQudmFsdWVcblx0XHR9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdGRvY3VtZW50LmFhYSA9IHRoaXM7XG5cdFx0dmFyIGRpdnMgPSBbXTtcblx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUudGl0bGVzO1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50LnRvTG93ZXJDYXNlKCkgfHwgJyc7XG5cdFx0dmFyIHRpdGxlQ2xpY2sgPSB0aGlzLnRpdGxlQ2xpY2s7XG5cdFx0dmFyIF9vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2Vcblx0XHRkYXRhLmZpbHRlcihmdW5jdGlvbih0aXRsZSl7XG5cdFx0XHRpZih0aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY3VycmVudCkgIT09IC0xKXtcblx0XHRcdFx0ZGl2cy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFRpdGxlLCAgICB7IHRpdGxlQ2xpY2s6dGl0bGVDbGljaywgdGl0bGU6dGl0bGUgfSkgKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gKCBcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzc05hbWU6J3B1cmUtdS03LTI0IGV4MSd9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdwJywgbnVsbCwgdGhpcy5wcm9wcy50aXRsZSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3ZhbHVlOiB0aGlzLnN0YXRlLmN1cnJlbnQsIGNsYXNzTmFtZTogJ2F1dG9Db21wbGV0ZScsIG9uQ2hhbmdlOiB0aGlzLl9vbkNoYW5nZX0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0XHRkaXZzIFxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3QxIiwidmFyIExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0aXRlbS5qcycpXG5cbnZhciBleGFtcGxlRGF0YSA9IHtcblx0dGl0bGVzOiBbXG5cdFx0J01leGljYW4gQmxhY2sgQmVhbiBTb3VwJyxcblx0XHQnRWdncGxhbnQgQmFiYWthbm9vc2gnLFxuXHRcdCdCYXRoaW5nYW4gYmVsIEtoYWwgV2VsIHRob21lJyxcblx0XHQnTGViYW5lc2UgVGFiYm91bGVoJyxcblx0XHQnQmFiYUdoYW5vb2onLFxuXHRcdCdGYWxmYWZlbCcsXG5cdFx0J1BpdGEgQnJlYWQnLFxuXHRcdCdLZWJhYiBLb3ViYW5lJyxcblx0XHQnTW9yb2NjYW4gWW9ndXJ0IERpcCcsXG5cdFx0J1BlcnNpYW4gQ3V0bGV0Jyxcblx0XHQnT21sZXQnLFxuXHRcdCdIb21tYXMgQmFsaWwnLFxuXHRcdCdNYXJnaGFyZXRhIFBpenphJyxcblx0XHQnQ2Fubm9saScsXG5cdFx0J05vcnRoIEl0YWxpYW4gQ2Fubm9saScsXG5cdFx0J0ljZWQgRmxvcmVudGluZScsXG5cdFx0J0FydGljaG9rZSBIdW1tdXMnLFxuXHRcdCdCYWtlZCBXaGl0ZSBCZWFuIERpcCcsXG5cdFx0J0JsYWNrIEJlYW4gRGlwJyxcblx0XHQnQmxvb2QgT3JhbmdlIGFuZCBHcmVlbiBPbGl2ZSBTYWxhZCcsXG5cdFx0J0JydXNjaGV0dGEgVGhyZWUgV2F5cycsXG5cdFx0J0NoaWxpIEdhcmxpYyBDb3JuIENoaXBzJyxcblx0XHQnQ2hpbGxlZCBHaW5nZXIgQ2FudGFsb3VwZSBTb3VwJyxcblx0XHQnQ2hpcG90bGUgQmFjb24gRGV2aWxlZCBFZ2dzJyxcblx0XHQnQ29jb251dCBTaHJpbXAgUG9wcGVycycsXG5cdFx0J0NyZWFteSBCbHVlIENoZWVzZSBEaXAnLFxuXHRcdCdEZXZpbGVkIEVnZ3MnLFxuXHRcdCdIZXJiZWQgQ2hlZGRhciBQYXJtZXNhbiBDcmlzcHMnLFxuXHRcdFwiS2V0dGxlIENvcm5cIixcblx0XHQnTWFwbGUtUm9zZW1hcnkgR2xhemVkIFdhbG51dHMnLFxuXHRcdCdOYW5kb+KAmXMgSG9uZXkgR2FybGljIFdpbmdzJyxcblx0XHQnUGlja2xlZCBTZXJyYW5vIENoaWxlcycsXG5cdFx0J1BvdGF0byBUYXF1aXRvcycsXG5cdFx0J1B1bXBraW4gU3BpY2UgQ3JlYW0gQ2hlZXNlIFNwcmVhZCcsXG5cdFx0J1JvYXN0ZWQgUmVkIFBlcHBlciBIdW1tdXMnLFxuXHRcdCdSb3NlbWFyeSBHYXJsaWMgU3dlZXQgUG90YXRvIEZyaWVzJyxcblx0XHQnU2xvdy1Sb2FzdGVkIENoZXJyeSBUb21hdG9lcycsXG5cdFx0J1Ntb2tlZCBUdW5hIERpcCcsXG5cdFx0J1NwaWN5IFBpY2tsZWQgR2FybGljJyxcblx0XHQnU3BpbmFjaCBhbmQgRmV0YSBUdXJub3ZlcnMnLFxuXHRcdCdTdW4tZHJpZWQgVG9tYXRvIEh1bW11cycsXG5cdFx0J1NwaWNlIFJvYXN0ZWQgQWxtb25kcycsXG5cdFx0J1R6YXR6aWtpIFNhdWNlIChjdWN1bWJlciB5b2d1cnQgZGlwKScsXG5cdFx0J1dob2xlIFdoZWF0IFBpdGEgQ2hpcHMnXG5cdF1cbn1cblxudmFyIExpc3QyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0xpc3QxJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoe1xuXHRcdFx0dGl0bGVzOiBleGFtcGxlRGF0YS50aXRsZXMsXG5cdFx0XHRjdXJyZW50OiAnJ1xuXG5cdFx0fSk7XG5cdH0sXG5cdHRpdGxlQ2xpY2s6IGZ1bmN0aW9uKHRpdGxlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnQ6dGl0bGVcblx0XHR9KTtcblx0fSxcblx0X29uQ2hhbmdlOiBmdW5jdGlvbihldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OmV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0ZG9jdW1lbnQuYWFhID0gdGhpcztcblx0XHR2YXIgb3B0cyA9IFtdO1xuXHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS50aXRsZXM7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnQudG9Mb3dlckNhc2UoKSB8fCAnJztcblx0XHR2YXIgdGl0bGVDbGljayA9IHRoaXMudGl0bGVDbGljaztcblx0XHR2YXIgX29uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZVxuXHRcdGRhdGEuZmlsdGVyKGZ1bmN0aW9uKHRpdGxlKXtcblx0XHRcdGlmKHRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpe1xuXHRcdFx0XHRvcHRzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudCggTGlzdEl0ZW0sIHsgdmFsOnRpdGxlLCBrZXk6dGl0bGUgfSkgKVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiAoIFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzTmFtZToncHVyZS11LTctMjQgZXgyJ30sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCBudWxsLCB0aGlzLnByb3BzLnRpdGxlKSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dmFsdWU6IHRoaXMuc3RhdGUuY3VycmVudCwgY2xhc3NOYW1lOiAnYXV0b0NvbXBsZXRlJywgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2JyJywgbnVsbCksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtjbGFzc05hbWU6ICdhdXRvQ29tcGxldGUnLCBvbkNoYW5nZTogdGhpcy5fb25DaGFuZ2V9LCBvcHRzKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3QyIiwidmFyIGV4YW1wbGVEYXRhID0ge1xuXHR0aXRsZXM6IFtcblx0XHQnTWV4aWNhbiBCbGFjayBCZWFuIFNvdXAnLFxuXHRcdCdFZ2dwbGFudCBCYWJha2Fub29zaCcsXG5cdFx0J0JhdGhpbmdhbiBiZWwgS2hhbCBXZWwgdGhvbWUnLFxuXHRcdCdMZWJhbmVzZSBUYWJib3VsZWgnLFxuXHRcdCdCYWJhR2hhbm9vaicsXG5cdFx0J0ZhbGZhZmVsJyxcblx0XHQnUGl0YSBCcmVhZCcsXG5cdFx0J0tlYmFiIEtvdWJhbmUnLFxuXHRcdCdNb3JvY2NhbiBZb2d1cnQgRGlwJyxcblx0XHQnUGVyc2lhbiBDdXRsZXQnLFxuXHRcdCdPbWxldCcsXG5cdFx0J0hvbW1hcyBCYWxpbCcsXG5cdFx0J01hcmdoYXJldGEgUGl6emEnLFxuXHRcdCdDYW5ub2xpJyxcblx0XHQnTm9ydGggSXRhbGlhbiBDYW5ub2xpJyxcblx0XHQnSWNlZCBGbG9yZW50aW5lJyxcblx0XHQnQXJ0aWNob2tlIEh1bW11cycsXG5cdFx0J0Jha2VkIFdoaXRlIEJlYW4gRGlwJyxcblx0XHQnQmxhY2sgQmVhbiBEaXAnLFxuXHRcdCdCbG9vZCBPcmFuZ2UgYW5kIEdyZWVuIE9saXZlIFNhbGFkJyxcblx0XHQnQnJ1c2NoZXR0YSBUaHJlZSBXYXlzJyxcblx0XHQnQ2hpbGkgR2FybGljIENvcm4gQ2hpcHMnLFxuXHRcdCdDaGlsbGVkIEdpbmdlciBDYW50YWxvdXBlIFNvdXAnLFxuXHRcdCdDaGlwb3RsZSBCYWNvbiBEZXZpbGVkIEVnZ3MnLFxuXHRcdCdDb2NvbnV0IFNocmltcCBQb3BwZXJzJyxcblx0XHQnQ3JlYW15IEJsdWUgQ2hlZXNlIERpcCcsXG5cdFx0J0RldmlsZWQgRWdncycsXG5cdFx0J0hlcmJlZCBDaGVkZGFyIFBhcm1lc2FuIENyaXNwcycsXG5cdFx0XCJLZXR0bGUgQ29yblwiLFxuXHRcdCdNYXBsZS1Sb3NlbWFyeSBHbGF6ZWQgV2FsbnV0cycsXG5cdFx0J05hbmRv4oCZcyBIb25leSBHYXJsaWMgV2luZ3MnLFxuXHRcdCdQaWNrbGVkIFNlcnJhbm8gQ2hpbGVzJyxcblx0XHQnUG90YXRvIFRhcXVpdG9zJyxcblx0XHQnUHVtcGtpbiBTcGljZSBDcmVhbSBDaGVlc2UgU3ByZWFkJyxcblx0XHQnUm9hc3RlZCBSZWQgUGVwcGVyIEh1bW11cycsXG5cdFx0J1Jvc2VtYXJ5IEdhcmxpYyBTd2VldCBQb3RhdG8gRnJpZXMnLFxuXHRcdCdTbG93LVJvYXN0ZWQgQ2hlcnJ5IFRvbWF0b2VzJyxcblx0XHQnU21va2VkIFR1bmEgRGlwJyxcblx0XHQnU3BpY3kgUGlja2xlZCBHYXJsaWMnLFxuXHRcdCdTcGluYWNoIGFuZCBGZXRhIFR1cm5vdmVycycsXG5cdFx0J1N1bi1kcmllZCBUb21hdG8gSHVtbXVzJyxcblx0XHQnU3BpY2UgUm9hc3RlZCBBbG1vbmRzJyxcblx0XHQnVHphdHppa2kgU2F1Y2UgKGN1Y3VtYmVyIHlvZ3VydCBkaXApJyxcblx0XHQnV2hvbGUgV2hlYXQgUGl0YSBDaGlwcydcblx0XVxufVxuXG52YXIgRGl2VGl0bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnRGl2VGl0bGUnLFxuXHR0aXRsZUNsaWNrOiBmdW5jdGlvbigpe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cdFx0dGhpcy5wcm9wcy50aXRsZUNsaWNrKHRoaXMucHJvcHMudGl0bGUpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtvbkNsaWNrOiB0aGlzLnRpdGxlQ2xpY2t9LCB0aGlzLnByb3BzLnRpdGxlKVxuXHRcdClcblx0fVxufSlcblxudmFyIExpc3QzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0xpc3QxJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoe1xuXHRcdFx0dGl0bGVzOiBleGFtcGxlRGF0YS50aXRsZXMsXG5cdFx0XHRjdXJyZW50OiAnJ1xuXG5cdFx0fSk7XG5cdH0sXG5cdHRpdGxlQ2xpY2s6IGZ1bmN0aW9uKHRpdGxlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnQ6dGl0bGVcblx0XHR9KTtcblx0fSxcblx0X29uQ2hhbmdlOiBmdW5jdGlvbihldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50OmV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0ZG9jdW1lbnQuYWFhID0gdGhpcztcblx0XHR2YXIgZGl2cyA9IFtdO1xuXHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS50aXRsZXM7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnQudG9Mb3dlckNhc2UoKSB8fCAnJztcblx0XHR2YXIgdGl0bGVDbGljayA9IHRoaXMudGl0bGVDbGljaztcblx0XHR2YXIgX29uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZVxuXHRcdGRhdGEuZmlsdGVyKGZ1bmN0aW9uKHRpdGxlKXtcblx0XHRcdGlmKHRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgY3VycmVudCl7XG5cdFx0XHRcdGRpdnMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KERpdlRpdGxlLCB7dGl0bGU6dGl0bGUsIHRpdGxlQ2xpY2s6dGl0bGVDbGljayB9KSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiAoIFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzTmFtZToncHVyZS11LTctMjQgZXgzJ30sXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCBudWxsLCB0aGlzLnByb3BzLnRpdGxlKSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dmFsdWU6IHRoaXMuc3RhdGUuY3VycmVudCwgY2xhc3NOYW1lOiAnYXV0b0NvbXBsZXRlJywgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlfSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzc05hbWU6J2Ryb3AnfSwgZGl2cyApXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdDMiLCJ2YXIgTGlzdEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnTGlzdEl0ZW0nLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICggUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge3ZhbHVlOiB0aGlzLnByb3BzLnZhbH0sIHRoaXMucHJvcHMudmFsKSApXG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtIiwidmFyIFRpdGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1RpdGxlJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7b25DbGljazogdGhpcy50aXRsZUNsaWNrfSwgdGhpcy5wcm9wcy50aXRsZSk7XG5cdH0sXG5cdHRpdGxlQ2xpY2s6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcm9wcy50aXRsZUNsaWNrKHRoaXMucHJvcHMudGl0bGUpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZSJdfQ==
