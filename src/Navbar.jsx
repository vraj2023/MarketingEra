import { stack, Switch } from '@mui/material'
import { Stack } from '@mui/material'
import { Route, Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { display, flexbox } from '@mui/system'
// import SearchBar from './SearchBar';
// import {logo} from '../utils/constants';
import navbar from './navbar.css'
import Services from './Services/Services'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#191717',
      top: 0,
      justifyContent: 'space-between',
      color: '#FA7225',
    }}
  >
    <div className="logo">
      <img src="logo.png"></img>
    </div>
    <div className="rightnav">
      <div className="Home nav">
        <Link to="/">Home</Link>
        <div className="underline"></div>
      </div>
      <div className="services nav ">
        <Link to="/services" >Services</Link>
        <div className="underline"></div>
      </div>
      <div className="courses nav">
        <Link to="/courses">Courses</Link>
        <div className="underline"></div>
      </div>
      <div className="about nav">
        <Link to="/about">About Us</Link>
        <div className="underline"></div>
      </div>
      <div className="contact nav">
        <a>Contact </a>
        <div className="underline"></div>
      </div>
    </div>

    {/* <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div> */}
  </Stack>
)

export default Navbar
