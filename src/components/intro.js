import React from 'react'
import Link from 'gatsby-link'
import profile from "../images/profile.png"
import resume_icon from "../images/resume_icon_new.png"
import linkedin_icon from "../images/linkedin_icon.png"
import resume from "../documents/RyanLeeResume.pdf"

const Intro = () => (
  <div className ="intro">
  	<div className ="intro_cont">
		<Link to="#"><img src={profile}/></Link>
		<span>
		    <h1>Ryan Nicholas Lee</h1>
		    <h2>
		    	Software programmer with a passion for<b> cloud computing</b> and<b> data science</b>.
		    	Senior at Carnegie Mellon University studying<b> Electrical and Computer Engineering</b>.
		    	Aside from programming, I love to travel the world to<b> serve</b> communities in need.
			</h2>
			<Link to={resume}><img src={resume_icon}/></Link>
			<a href="https://www.linkedin.com/in/ryalee97"><img src={linkedin_icon}/></a>
			<h1></h1>
		</span>
	</div>
  </div>
)

export default Intro
