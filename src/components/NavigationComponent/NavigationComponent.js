import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationComponent = () => {
  return(
  
  <div>
  <div>
  <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          PRIORÍZATE
        </Navbar.Brand>
        <Nav>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/sales'>Sales</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/login'>Login</Link>
          <Link className='nav-link' to='/register'>Register</Link>
          <Link className='nav-link' to='/articulos'>Articulos</Link>
          <div class="input-group rounded">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button class="fas fa-search">🔎</button>
        
          </div>
        </Nav>
      </Container>
    </Navbar>
  </div>

  </div>
   

  )
};

export default NavigationComponent;
