import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

const DefaultFooter = ({ children, ...attributes }) => {
  return (
    <React.Fragment>
      <span>Gorrion &copy; 2019 </span>
    </React.Fragment>
  );
};

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
