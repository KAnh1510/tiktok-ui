import PropTypes from "prop-types";
import React from "react";

function Menu({ children }) {
  return <nav>{children}</nav>;
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Menu;
