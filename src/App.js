import React, { Component } from 'react'
import TopNavBar from './components/topNavBar/topNavBar';
import NavBar from './components/navBar/navBar'
import About from './components/about/about'
import Intro from './components/intro/intro'
import Skills from './components/skills/skills'
import Works from './components/works/works'
import Hobbies from './components/hobbies/hobbies'
import Contact from './components/contact/contact'

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <NavBar />
        <About />
        <Intro />
        <Skills />
        <Works />
        <Hobbies />
        <Contact />
      </div>
    )
  }
}


//Top - NavBar tel\address\links
    //NavBar
    //Section1 name position  right photo
    //Section2 introduction
    //Section3 Skills
    //Section4 My works
    //Section5 My interests
    //Section6 Contact me

