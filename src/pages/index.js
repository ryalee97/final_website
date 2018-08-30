import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header.js'
import Intro from '../components/intro.js'
import Projects from '../components/projects.js'
import Service from '../components/service.js'
import Skills from '../components/skills.js'
import Footer from '../components/footer.js'

const IndexPage = () => (
  <div>
  	<Intro/>
  	<Header/>
  	<Projects/>
  	<Skills/>
  	<Service/>
  	<Footer/>
  </div>
)

export default IndexPage
