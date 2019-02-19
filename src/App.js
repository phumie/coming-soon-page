import React, { Component } from "react";
import Particles from "react-particles-js";
import { Grid, Cell } from "react-mdl";
import windowSize from "react-window-size";
import logo from "./assets/phumie-logo-white.png";
import "./App.css";

const particleOpt = {
  particles: {
    number: {
      value: 30
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="header-content"
          style={{ width: "100%", margin: "auto" }}
        >
          <Particles
            params={particleOpt}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          />
          <div className="contents">
            <img src={logo} />
            <div className="coming-soon">
              <h3>WEB DEVELOPMENT | SOFTWARE DEVELOPMENT | UI/UX DESINGING</h3>
              <p>WEBSITE UNDER CONSTRUCTION</p>
              <hr />
            </div>
          </div>
          <a
            href="#aboutme"
            id="scroll-next"
            className="scroll-down"
            address="true"
          />
        </div>
      </div>
    );
  }
}

export default App;
