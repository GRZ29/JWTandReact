import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Profile from './Profile';
import { useStore } from '../stores/store.js';
import { observer } from 'mobx-react-lite';
import  Stores from '../stores/userStore';

const NavMenu = (props) => {

  const { userStore } = useStore();
  const { user } = userStore;


  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">JtwConReact</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
              {
                !Stores.isLoggedIn && (
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/login">login</NavLink>
                  </NavItem>
                )
              }
              <Profile />
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default observer(NavMenu)