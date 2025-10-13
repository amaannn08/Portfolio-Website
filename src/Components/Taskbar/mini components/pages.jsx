import React, { useState } from 'react';

const Pages = () => {
  const [selected, setSelected] = useState("");
  const [hover, setHover] = useState("");

  const items = [
    {
      label: "Home",
      iconBlack: "./images/homeblack.svg",
      iconWhite: "./images/homewhite.svg"
    },
    {
      label: "Experience",
      iconBlack: "./images/experienceblack.png",
      iconWhite: "./images/experiencewhite.png"
    },
    {
      label: "Projects",
      iconBlack: "./images/projectsblack.png",
      iconWhite: "./images/projectswhite.png"
    },
    {
      label: "About",
      iconBlack: "./images/aboutblack.png",
      iconWhite: "./images/aboutwhite.png"
    },
    {
      label: "Contact",
      iconBlack: "./images/contactblack.png",
      iconWhite: "./images/contactwhite.png"
    }
  ];

  return (
    <div className='flex flex-col mx-2 gap-2'>
      {items.map((item) => {
        const isActive = selected === item.label;   
        const isHovered = hover === item.label;    
        const imgSrc = !isActive || isHovered ? item.iconBlack : item.iconWhite;

        return (
          <div
            key={item.label}
            onClick={() => setSelected(item.label)}
            onMouseEnter={() => setHover(item.label)}
            onMouseLeave={() => setHover("")}
            className={`group flex flex-row p-2 items-center gap-1 rounded-md h-8 w-[97%] cursor-pointer
              ${isActive ? "bg-black text-white" : " text-black"} 
              hover:bg-gray-200  hover:border-black ${isActive?"hover:border":""} transition-all duration-200`}
          >
            <img src={imgSrc} alt={`${item.label} icon`} className="h-4 w-4" />
            <h1 className='pt-1 font-mono text-md group-hover:text-black'>
              {item.label}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Pages;
