import React from 'react';
import {render} from 'react-dom';
import {List1, List2, List3} from './components'
const Body = () => (
	<div>
		<div className='header'>
			<div className='title'>React AutoComplete Examples</div>
		</div>
		<div className='container'>
			<div className='pure-g'>
				<List1 title='Clickable Divs that disappear filled. ex 1'/>
				<List2 title='Drop Down Menu Option. ex 2'/>
				<List3 title='Clickable Divs that appear filled in. ex 3'/>
			</div>
		</div>
	</div>
);

render( Body(), document.getElementById('mount') );
