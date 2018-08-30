import React from 'react'
import Link from 'gatsby-link'
import kenya_cover from "../images/kenya_cover.jpg"
import dr_cover from "../images/dr_cover.png"
import aws_summit from "../images/aws_summit.jpg"
import google_ml from "../images/google_ml.png"

const Service = () => (
	<section id="services">
		<div className="services">
			<h1>Cloud Computing Events I've attended</h1>
			<div className = "services_cont">
				<p>AWS Summit in NYC</p>
				<p>Machine Learning Tech Talk with Google Cloud</p>
			</div>
			<div className = "services_cont">
				<span><img src={aws_summit}/></span>
				<span><img src={google_ml}/></span>
			</div>
			<br/>
			<br/>
			<h1>Volunteer Service Trips I've Been On</h1>
			<div className = "services_cont">
				<p>Kenya with The Supply</p>
				<p>Dominican Republic with Outreach360</p>
			</div>
			<div className = "services_cont">
				<span><img src={kenya_cover}/></span>
				<span><img src={dr_cover}/></span>
			</div>
		</div>
	</section>
)

export default Service
