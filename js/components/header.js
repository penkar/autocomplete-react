var Header = React.createClass({
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