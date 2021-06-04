import img2 from "./tribar.PNG";
import Val2 from "./prj";
import Val3 from "./header";
import React, { Component } from "react";
class Val extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Btn_val: 0,
    };
  }

  render() {
    return (
      <div class="udemy">
        <div>
          <Val3></Val3>
        </div>
        <div class="blank"></div>
        <div class="slider">
          <div class="slider-div1">
            <button class="btn-1">Most popular</button>
          </div>
          <div class="slider-div2">
            <button class="btn-2">New</button>
          </div>
          <div class="slider-div3">
            <button class="btn-3">Beginner Favorites</button>
          </div>
        </div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="filter-button">
          <div class="f1-div1"></div>
          <div class="f2-div2">
            <Val2></Val2>
          </div>
        </div>
        <div class="blank"></div>
      </div>
    );
  }
}

export default Val;
