import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Black Jack + Memory Match Game</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/blackjack'>
							<img src={require('./tv.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>

						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/blackjack'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'><i>Tv Show: Game of Thrones</i> &nbsp;theme Blackjack 
				application featuring a game log of user activity, memory match 
				game for bonus coins, and animated dragons. </div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>@keyframes animation</div>
					<div className='featured tags'>JavaScript</div>
					<div className='featured tags'>jQuery</div>
				</div>
			</div>
		)
	}
}

class Portfolio4z extends Component{
	render(){
		return(
			<div className='portfolio-page'> 

				<div className='col-xs-12 col-sm-7 col-md-6 project-wrapper'>
				<div className="fly-dragon"><div className='dragon'></div></div>
					<Project />
				</div>
				<div className='hidden-xs col-sm-5 col-md-6 sublime-wrapper'>
					<Code />
					<div style={{position:'absolute', right:0, top:0, width:'100%', height:75, backgroundColor:'#171814', zIndex:2}}></div>
				</div>
			</div>
		)
	}
}

export default Portfolio4z