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