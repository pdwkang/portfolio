import React, { Component } from 'react';
import $ from 'jquery';



class MyForm extends Component {
// 	componentDidMount() {
// 		$.ajax({
//     url: 'http://localhost:3003/email/send',
//     headers: {
//         'Content-Type':'application/x-www-form-urlencoded'
//     },
//     method: 'POST',
//     crossDomain: 'true',
//     dataType: 'json',
//     data: {'email':'aaa','password': 'aaa', 'number': 'aaa'},
//     success: (data)=>{
//       console.log('YOU SEND THE DATA TO THE BACKEND!')
//     }
//     }) .fail(function(jqXhr) {
//   console.log('failed');
// });
// 	}
	

	render(){
		return(
			<form >
				{/*

					<div className="form-group row">
					
				<div className='col-xs-6'><textarea placeholder='Name' className="form-control contact-form" rows="1"></textarea></div>
    				<div className='col-xs-6'><textarea placeholder='Phone' className="form-control contact-form" rows="1"></textarea></div>
    			</div>
    			<div className="form-group row">	
    				<div className='col-xs-12'><textarea placeholder='Email' className="form-control contact-form" rows="1"></textarea></div>
  				</div>			
				<div className="form-group row">
    				<div className='col-xs-9 contact-message'><textarea placeholder='Message....in progress. Instead, please send me an email at dwkang3403@gmail.com or call me at 706-424-0364' className="form-control contact-form " rows="4"></textarea>
						
    				</div>
    				<div className='col-xs-3 contact-btn-margin-left'>
							<button className='btn btn-contact'>Send</button>
						</div>
  				</div> 
				*/}
				<div className='row'>
					<div className='about-me-description col-lg-6 col-md-6 col-sm-11 col-xs-11'>
						<div className='actual-text'>
							I am a web developer based in Atlanta. 
							
							<br/><br/>
							
							While being an American citizen, I served my mother country as an <a className='contact-a-tag' href='https://www.youtube.com/watch?v=cmeZAmjX8XE&t=212s' target='_blank'>ATCIS-R</a> operator, a Geolocation <span className='glyphicon glyphicon-map-marker'></span> Tool used in the Korean Army. 
							
							<br/><br/>

							I received a Psychology &nbsp;<span className='glyphicon glyphicon-education'></span>&nbsp; degree from the <a href='http://www.uga.edu/' target='_blank' className='contact-a-tag'>University of Georgia</a> prior 
							to discovering my passion for coding. Although studying the 
							human mind was intresting, I quickly fell in love with the mind of a computer and the idea of 
							being able to create &nbsp;<span className='glyphicon glyphicon-wrench'></span>&nbsp; anything from scratch. 
							
							<br/><br/>
							
							This led me to join <a href='http://www.digitalcrafts.com/' target='_blank' className='contact-a-tag'>DigitalCrafts</a>, a 16-week immersive coding bootcamp, where
							I trained &nbsp;<span className='glyphicon glyphicon-hourglass'></span>&nbsp; to become a full stack developer. 
							
							<span className='hidden-xs'>
								<br/><br/>
								Besides coding, I{"'"}m interested in golf, traveling, and all things NBA.
							</span>
							
							<br/><br/>
							
							Contact me ! &nbsp;&nbsp;&nbsp;
							
							<br/>

							<div style={{display:'inline-block',width:'50%'}}>(706) 424-0364</div>
							<div style={{display:'inline-block',width:'50%', textAlign:'right'}}>paulkangdev@gmail.com</div>
							
						</div>
					</div>
				</div>
				<div></div>
  				<div className='row' style={{paddingLeft:30}}>
  					<div className='linkz'><a target="_blank" href='https://github.com/pdwkang'><img src={require('./github.png')} alt='a' /></a></div>
  					<div className='linkz'><a target="_blank" href='https://www.linkedin.com/in/paul-kang-373820131'><img src={require('./linkedin.png')} alt='a' /></a></div>
  					<div className='linkz'><a href='mailto:paulkangdev@gmail.com'><img src={require('./email.png')} alt='a' /></a></div>
  					<div className='linkz'><a href={require("../../public/PaulKangResume.pdf")} target="_blank"><img src={require('./resume.png')} alt='a' /></a></div>
				</div>
  			</form>			
		)
	}
}

// <a href='mailto:paulkangdev@gmail.com'>asdf</a>
class ContactHeader extends Component{
	render(){
		return(
			<div style={{marginTop:75, marginLeft:10}}>
				<div className='project-titles-header4'>
					<div className='project-title-left-top4'></div>
					HI, I{"'"}m Paul
					<div className='project-title-bottom-right4'></div>
				</div>  				
			</div>
		)
	}
}
class Contact extends Component{
	render(){
		return(
			<div className='contact-wrapper'>
				<ContactHeader />
				<div className='contact-left-column'>
					<MyForm />
				</div>

			</div>
		)
	}
}

export default Contact