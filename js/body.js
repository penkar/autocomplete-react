var List = React.createClass({
	displayName: 'List',
	render: function(){
		return ( React.createElement('div', null, 'Things') );
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