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
          <div className="w-full h-full">
            <iframe 
              src="https://giphy.com/embed/RUBmdbtMZeFFY2Z5lz" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;