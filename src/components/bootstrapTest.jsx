/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
class BootTest extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              quo.
            </p>
          </div>
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              quo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7">
            <h3>title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, rem!
            </p>
            <h3>title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Delectus, rem!
            </p>
          </div>

          <div className="col">
            <h3>title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis pariatur dolor sapiente odit officia vel. Aliquid
              perferendis id maiores ipsum mollitia veritatis magni fuga quo
              velit animi quas eligendi cum dolores consequatur alias, rerum
              optio vero, voluptatibus corrupti soluta quis commodi earum! Ipsum
              in ipsam dignissimos, neque quos nihil nostrum veniam odio labore
              maiores dicta enim accusantium illum aliquam dolores?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BootTest;
