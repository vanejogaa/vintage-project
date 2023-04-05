import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationComponent = () => {
  return(
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
          <Link className='nav-link' to='/user'>User</Link>
        </Nav>
      </Container>
    </Navbar>

  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
