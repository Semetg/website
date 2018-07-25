import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default () => (
  <Navbar default collapseOnSelect>

    <Navbar.Header>
      <Navbar.Brand>
        <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} componentClass={NavLink} href="/TutorialMain" to="/TutorialMain" activeClassName="is-active">
          Tutorial
        </NavItem>
        <NavItem eventKey={2} componentClass={NavLink} href="/STLMain" to="/STLMain" activeClassName="is-active">
          STL
        </NavItem>
        <NavItem eventKey={3} componentClass={NavLink} href="/TipsAndTricksMain" to="/TipsAndTricksMain" activeClassName="is-active">
          Tips &amp;&amp; Tricks
        </NavItem>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
);