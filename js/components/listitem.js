var ListItem = React.createClass({
	displayName: 'ListItem',
	render: function(){
		return ( React.createElement('option', {value: this.props.val}, this.props.val) )
	}
});

module.exports = ListItem