import React, { Component } from 'react';
import Tab1Description from './tab1description'

class Tab1 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Tab1Description />, 'tab1')
	}

	render(){
		var backgroundColor = '#444444'
		var borderColor = 'none'
		var borderBottom = '1px solid white'
		if(this.props.target === 'tab1'){
			backgroundColor = '#272822'
			borderColor = 'lightgrey 1px solid'
			borderBottom = '1px solid #272822'};
		return(
			<div onClick={this.onClick} className='each-tab' >
				<div style={{borderTopLeftRadius:'20%',borderTopRightRadius:'20%',backgroundColor:backgroundColor, borderLeft: borderColor, borderRight: borderColor, borderTop: borderColor, borderBottom: borderBottom, padding:'3px 10px'}}>
				index.js
				</div>
			</div>
		)
	}
}


export default Tab1