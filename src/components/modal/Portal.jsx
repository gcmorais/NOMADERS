import React from "react";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import ReactDOM from "react-dom";

export default function PortalCreate({
  children,
  navLink,
  width,
  theme,
  boxStyle,
}) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden bg-secundary-gray/50 px-2 backdrop-blur-sm">
      <div
        className={`rounded-xl bg-white lg:h-auto ${width} w-full lg:border-0 ${theme}`}
      >
        <div className="m-2 ">
          <button
            type="button"
            onClick={navLink}
            className={`mr-[50px] text-3xl opacity-50 lg:mb-5 lg:text-xl ${theme}`}
          >
            <AiOutlineClose className={`rounded-full fill-black ${theme}`} />
          </button>
        </div>
        <div className={`mt-10 px-10 lg:mt-0 ${boxStyle}`}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

PortalCreate.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  navLink: PropTypes.func,
  theme: PropTypes.string,
  boxStyle: PropTypes.string,
};

PortalCreate.defaultProps = {
  navLink: () => {},
  theme: "",
  boxStyle: "",
};
