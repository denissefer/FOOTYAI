import React from "react";


const Gear = ({ size, position, animation }) => {
  return (
    <div
      className={`gear ${size} ${position} relative flex items-center justify-center bg-gray-600 rounded-full shadow-md`}
    >
      <div
        className={`gear-inner w-full h-full flex items-center justify-center border border-gray-300 rounded-full animate-${animation}`}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bar absolute bg-gray-500 h-4 w-[76px] rounded-sm border-l border-r border-gray-200"
            style={{ transform: `rotate(${index * 30}deg)` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const GearBox = () => {
  return (
    <div className="gearbox bg-black h-[150px] w-[200px] relative overflow-hidden rounded-md shadow-lg">
      <div className="overlay absolute top-0 left-0 w-full h-full z-10 bg-transparent"></div>
      <Gear size="large" position="gear one" animation="counter-clockwise" />
      <Gear size="" position="gear two" animation="clockwise" />
      <Gear size="" position="gear three" animation="counter-clockwise" />
      <Gear size="large" position="gear four" animation="counter-clockwise" />
    </div>
  );
};

export default GearBox;
