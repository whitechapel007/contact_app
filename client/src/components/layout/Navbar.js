import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
  return (
    <div className="navbar bg-primary">
      <h3>
        <i className={icon} />
        {title}
      </h3>
      <ul>
        <l1>
          <Link to="/">Home</Link>
        </l1>
        <l1>
          <Link to="/about">About</Link>
        </l1>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
