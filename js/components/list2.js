import React from 'react';
import {ExampleData} from './exampledata';

class List2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {current:''}
	}
	render() {
		let regex = new RegExp(this.state.current, 'i');
		return (
			<div className='pure-u-7-24 ex2'>
				<p>{this.props.title}</p>
				<input value={this.state.current} className='autoComplete' onChange={this._onChange} />
				<br/>
				<select>
					<option key={0} value=""></option>
					{ ExampleData
							.filter( title => (!!title.match(regex)))
							.map( title => <option key={title} value={title}>{title}</option>) }
				</select>
			</div>
		)
	}
	_titleClick = (current) => this.setState({current})
	_onChange = ({target}) => this.setState({current: target.value})
}
export {List2};
