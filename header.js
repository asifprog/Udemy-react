import img from "./udemy.png";
import img1 from "./Cart.webp";
import React, { Component } from "react";
class Val3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Myheader></Myheader>;
  }
}

function Myheader(params) {
  return (
    <div class="header">
      <div class="header-div1">
        <img src={img} alt="pic" width="150" height="70" />
      </div>
      <div class="header-div2">Categories</div>
      <div class="header-div3">
        <form>
          <input
            type="text"
            id="h-div"
            name="search"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <div class="header-div4">Udemy for business</div>
      <div class="header-div5">Teach on udemy</div>
      <div class="header-div6">
        <img src={img1} alt="pic" width="30" height="30" />
      </div>
      <div class="header-div7">
        <button class="button-1 button1">Log in</button>
      </div>
      <div class="header-div8">
        <button class="button-2 button2">Sign up</button>
      </div>
    </div>
  );
}
export default Val3;
