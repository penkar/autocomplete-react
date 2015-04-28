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