import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
// var sp = function(number){var returnThis
// 	for(let i = 0; i < number; i++){returnThis += '<span>{&nbsp;&nbsp;}</span>'}
// 		return returnThis;
// 	}
var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 29; i++){
	numbers.push(i)
}
class Tab1Description extends Component{
	render(){
		return(
			<div className='code-font'>
				<div className='col-sm-1'>
					{numbers.map((number, index)=>{
						return(
							<div className='line-count' key={index}>{number}</div>
						)
					})}
				</div>
				<div className='col-sm-10 col-md-11'>
					<div> {cB('var')} keysDown {cR('=')} [];</div>
					<div> {cGR('// Push key code to keysDown array when pressed down')} </div>
					<div> {cB("addEventListener")}{'("keyDown",'} {'('}{cB("event")}{') => {'}</div>
					<div> &nbsp;&nbsp; keysDown[{cB("event")}{'.keyCode'}] {cR('=')} {cP("true")} ;</div>
					<div> {'});'} </div>
					<br/>
					<div> {cGR('// Remove key code from keysDown array when key is released')} </div>
					<div> {cB("addEventListener")}{'("keyUp",'} {'('}{cB("event")}{') => {'}</div>
					<div> &nbsp;&nbsp; {cR('delete')} keysDown[{cB("event")}{'.keyCode'}]</div>					
					<div> {'});'} </div>
					<br/>
					<div> {cB('function')} {cG('fireBullet')}{'(){'} </div>
					<div> &nbsp;&nbsp;{cR('if')} ( {cB('70')} {cR('in')} keysDown {'){'}</div>
					<div> &nbsp;&nbsp;&nbsp;&nbsp;{'bullets[bulletCounter].'}{cB('x')} {cR('=')} {'heroLocation.'}{cB('x')}</div>
					<div> &nbsp;&nbsp;&nbsp;&nbsp;{'bullets[bulletCounter].'}{cB('y')} {cR('=')} {'heroLocation.'}{cB('y')}</div>
					<div> &nbsp;&nbsp;}</div>
					<div> {'};'} </div>
					<br/>
					<div> {cB('var')} bulletSpeed {cR('=')} {cB('15')};</div>
					<div> {cB('function')} {cG('moveBullet')}{'(){'} </div>
					<div> &nbsp;&nbsp;{cR('for')} ({cB('var')} i {cR('=')} {cB('0')}; i {cB('<')} {cB('100')}; i{cB('++')}{'{'}</div>
					<div> &nbsp;&nbsp;&nbsp;&nbsp;{'bullets[i].'}{cB('x')} {cR('+=')} bulletSpeed;</div>
					<div> &nbsp;&nbsp;{'}'}</div>
					<div> {'};'} <span className='blinkTypeSomething'>|</span></div>					
				</div>
			</div>
		)
	}
}

export default Tab1Description
