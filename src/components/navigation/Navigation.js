import React from 'react';
import Navbar from './Navbar';
import Navbutton from './Navbutton';


export default class Navigation extends React.Component {
  state = {
    windowWidth: undefined
  }

  updateWidth = () => {
    this.setState(() => ({
      windowWidth: window.innerWidth
    }));
  }

  componentWillMount() {
    this.updateWidth();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {

    return (
      <div>
        { ((this.state.windowWidth > 800) ? <Navbar /> : <Navbutton />) }
      </div>
    );
  }
}