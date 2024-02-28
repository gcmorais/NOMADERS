import React from 'react';
import PropTypes from 'prop-types';

function Info({ title, text, icon }) {
  return (
    <div className="flex flex-col gap-2 bg-white m-1 rounded-lg font-inter p-8">
      <span className=" w-[70px] h-[69px] flex justify-center items-center m-auto rounded-lg bg-primary-white text-primary-indigo text-3xl">
        {icon}
      </span>
      <h1 className="text-xl text-primary-black font-semibold">{title}</h1>
      <span className="m-auto text-secundary-gray tracking-wider  font-semibold text-xs">
        {text}
      </span>
    </div>
  );
}

export default Info;

Info.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
