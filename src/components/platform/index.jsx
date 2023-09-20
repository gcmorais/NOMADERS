import React from "react";
import PropTypes from "prop-types";

function Platform({ img }) {
  return (
    <div className="flex justify-center items-center w-28 h-28 rounded-lg bg-white drop-shadow-md">
      <img src={img} alt="logo" className="w-[40px]" />
    </div>
  );
}

export default Platform;

Platform.propTypes = {
  img: PropTypes.node.isRequired,
};
