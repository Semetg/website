import React from "react";
import { Link } from 'react-router-dom';

export default class Navbutton extends React.Component {
  state = {
    isOpen: false,
    menuElements: undefined
  };

  componentDidMount() {
    const background = Array.from(document.getElementsByClassName('navbutton__background'));
    const button = Array.from(document.getElementsByClassName('navbutton__button'));
    const container = Array.from(document.getElementsByClassName('navbutton__nav'));
    const links = Array.from(document.getElementsByClassName('navbutton__item'));
    const menuElements = background.concat(button).concat(container).concat(links);

    this.setState(() => ({
      menuElements
    }));
  }

  openMenu = () => {
    this.state.menuElements.forEach(element => element.classList.add('open'));
  }

  closeMenu = () => {
    this.state.menuElements.forEach(element => element.classList.remove('open'));
  }

  handleClick = () => {
    if (this.state.isOpen)
      this.closeMenu();
    else
      this.openMenu();

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="navbutton">
        <button onClick={this.handleClick} className="navbutton__button">
          <span>&nbsp;</span>
        </button>

        <div className="navbutton__background">&nbsp;</div>

        <nav className="navbutton__nav">
          <ul className="navbutton__list">
            <li className="navbutton__item">
              <Link to="/" onClick={this.handleClick}>Home</Link>
            </li>
            <li className="navbutton__item">
              <Link to="/TutorialMain" onClick={this.handleClick}>Tutorial</Link>
            </li>
            <li className="navbutton__item">
              <Link to="/STLMain" onClick={this.handleClick}>STL</Link>
            </li>
            <li className="navbutton__item">
              <Link to="/TipsAndTricksMain" onClick={this.handleClick}>Tips</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}