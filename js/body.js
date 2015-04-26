var Body = React.createClass({
	displayName: 'Body',
	render: function(){
		return(
			React.createElement('div', {className:'body'}
			)
		)
	}
})

React.render(
	React.createElement(Body, null),
	document.getElementById('mount')
)