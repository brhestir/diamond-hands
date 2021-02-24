import React from "react";
import { Link } from "react-router-dom";
import businessManPng from "../../assets/images/business-man.png";

const NavbarVanilla = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={businessManPng} width="30" />
          </Link>

          {/* Burger button */}
          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
          {/* End Burger button */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/positions/add">
              Position: Add
            </Link>
            {/* <Link className="navbar-link" to="/positions/:id/edit">
							Position: Edit
						</Link> */}
            {/* <Link className="navbar-item" to="/positions/:id">
							Positions: One
						</Link> */}
            <Link className="navbar-item" to="/positions/all">
              Positions: All
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" disabled>
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" disabled>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarVanilla;