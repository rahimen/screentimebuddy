import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto max-w-[300px] aspect-[9/19.5]">
      {/* Phone Frame */}
      <div className="absolute inset-0 w-full h-full bg-[#1A1F2C] rounded-[3rem] p-3 shadow-2xl border-8 border-[#1A1F2C]">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl z-20">
          {/* Camera/Sensors */}
          <div className="absolute top-3 right-7 w-2 h-2 rounded-full bg-[#0F1115]" />
          <div className="absolute top-3 left-7 w-3 h-3 rounded-full bg-[#0F1115] ring-2 ring-[#2A2A2D]" />
        </div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
          <img
            src="/lovable-uploads/31f95fa7-2ab9-4775-ab04-4d5b3c134143.png"
            alt="Screen time tracking interface showing daily usage statistics and chat messages between buddies"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-2 top-[120px] w-1 h-12 bg-[#1A1F2C] rounded-l-lg" />
        <div className="absolute -left-2 top-[170px] w-1 h-12 bg-[#1A1F2C] rounded-l-lg" />
        <div className="absolute -right-2 top-[100px] w-1 h-16 bg-[#1A1F2C] rounded-r-lg" />
      </div>
    </div>
  );
};

export default PhoneMockup;