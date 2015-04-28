var List1 = require('./components/list1.js')
var List2 = require('./components/list2.js')

var Body = React.createClass({
	displayName: 'Body',
	render: function(){
		return(
			React.createElement('div', null,
				React.createElement(List1, null),
				React.createElement(List2, null)
			)
		);
	}
});

React.render(
	React.createElement(Body, null),
	document.getElementById('mount')
);