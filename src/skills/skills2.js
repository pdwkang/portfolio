import React, { Component } from 'react';

class SkillIcons extends Component{
	render(){
		return(
			<div className='skill-icons-wrapper row'>
				<div className='each-iconz'><div className='icon-image'></div><div className='icon-name'>HTML5</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon html'><div className='icon-image'><img src={require('./images/html.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>HTML5</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon css'><div className='icon-image'><img src={require('./images/css.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>CSS3</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon javascript'><div className='icon-image'><img src={require('./images/javascript.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>JavaScript</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon jquery'><div className='icon-image'><img src={require('./images/jquery.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>jQuery</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon bootstrap'><div className='icon-image'><img src={require('./images/bootstrap.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>Bootstrap</div></div>
				<div className='col-md-2 hidden-xs hidden-sm each-icon ajax'><div className='icon-image'><img src={require('./images/ajax.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>Ajax</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon nodejs'><div className='icon-image'><img src={require('./images/nodejs.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>Node.js</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon sass'><div className='icon-image'><img src={require('./images/sass.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>SASS</div></div>
				<div className='col-md-2 hidden-xs hidden-sm each-icon compass'><div className='icon-image'><img src={require('./images/compass.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>Compass</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon react'><div className='icon-image'><img src={require('./images/react.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>React.js</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon reactrouter'><div className='icon-image'><img src={require('./images/reactrouter.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>React-Router</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon json'><div className='icon-image'><img src={require('./images/json.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>JSON</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon npm'><div className='icon-image'><img src={require('./images/npm.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>NPM</div></div>
				<div className='col-md-2 col-sm-3 col-xs-4 each-icon git'><div className='icon-image'><img src={require('./images/git.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>GIT</div></div>
				<div className='col-md-2 hidden-xs col-xs-4 hidden-sm each-icon sourcetree'><div className='icon-image'><img src={require('./images/sourcetree.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>SourceTree</div></div>
				<div className='col-md-2 hidden-xs col-xs-4 hidden-sm each-icon github'><div className='icon-image'><img src={require('./images/github.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>GitHub</div></div>
				<div className='col-md-2 hidden-xs col-xs-4 hidden-sm each-icon aws'><div className='icon-image'><img src={require('./images/aws.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>AWS</div></div>
				<div className='col-md-2 hidden-xs col-xs-4 hidden-sm each-icon webpack'><div className='icon-image'><img src={require('./images/webpack.png')} alt='Please let me know!' /></div><div className='border-div'></div><div className='icon-name'>Webpack</div></div>
				
			</div>
		)
	}
}

class Header extends Component{
	render(){
		return(
			<div className='skills-header'>
				{/*<div className='skills-header-title page-header'>Skills and Tools</div>*/}
			</div>
		)
	}
}

class Skills extends Component{
	render(){
		return(
			<div className='skills-page'>
				{/*<Header />*/}
				<SkillIcons />
			</div>
		)
	}
}

export default Skills