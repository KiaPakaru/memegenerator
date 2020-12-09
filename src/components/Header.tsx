import { url } from "inspector";
import React from "react";
import Header_meme from "../images/Header_meme.png";
import Header_meme2 from "../images/Header_meme2.png";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img src={Header_meme} alt="" />
        <p style={{ marginLeft: 12 }}>Meme Generator</p>
        <img src={Header_meme2} alt="" />
      </header>
    );
  }
}
export default Header;
