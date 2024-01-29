import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

function ReportsButton({click, icon, text, aditionalStyles}) {
  return (
    <button
      type="button"
      className={`mt-2 hidden items-center gap-2 rounded-md bg-primary-indigo px-5 text-[13px] text-white md:flex ${aditionalStyles}`}
      onClick={click}
    >
      {icon && <AiOutlineDownload />}
      {text}
    </button>
  )
}

export default ReportsButton