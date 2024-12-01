import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto max-w-[300px] aspect-[9/19.5]">
      {/* Phone Frame */}
      <div className="absolute inset-0 w-full h-full bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl z-20" />
        {/* Screen Content */}
        <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
          <img
            src="/lovable-uploads/a89e2a64-f187-4d81-826e-e78e665e58e8.png"
            alt="Screen time tracking interface showing daily usage statistics"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;