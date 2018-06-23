import React from 'react';
import {ExampleData} from './exampledata';
export default class List3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {current:''};
	}
	render() {
		let regex = new RegExp(this.state.current, 'i');
		return (
			<div className='pure-u-7-24 ex3'>
				<p>{this.props.title}</p>
				<input value={this.state.current} className='autoComplete' onChange={this._onChange} />
				<div className="drop">
					{ ExampleData
							.filter( title => (!!title.match(regex)))
							.map( title => (
								<div key={title} onClick={ () => this._titleClick(title) }>{title}</div>
							) )
					}
				</div>
			</div>
		)
	}
	_titleClick = (current) => this.setState({current})
	_onChange = ({target}) => this.setState({current: target.value})
}