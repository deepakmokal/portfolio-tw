import React, { useState } from "react";
import avatar from '../assets/images/avatar.png'

const Hero = () => {

  return (
    <>
      <div className="hero-wrapper max-w-lg m-auto py-10">
        <div className="avatar">
            <img src={avatar} alt="user" className="rounded w-40 h-auto m-auto mb-3 md:mb-6" />
        </div>
        <h1 className="text-2xl md:text-3xl mb-2 md:mb-4 text-center capitalize font-semibold text-indigo-500">
          hi mate! I am alex
        </h1>
        <p className="text-sm text-center md:text-base text-slate-900 dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          iste? Voluptate error quos eos sunt rem mollitia pariatur enim ratione
          veniam recusandae eius excepturi atque animi provident placeat, ut
          obcaecati.
        </p>
      </div>
    </>
  );
};

export default Hero;
