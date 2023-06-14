import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/#", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Condense articles with <br className='max-md:hidden' />
        <span className='lemon_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Experience effortless reading with Briefify, an open-source article summarizer that 
        converts lengthy articles into concise and clear summaries.
      </h2>
    </header>
  );
};

export default Hero;