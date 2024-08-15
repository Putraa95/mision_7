import React, { useState, useEffect, useCallback } from "react";

const Countdown = ({ endTime }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = endTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [endTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  return (
    <div className="text-center bg-orange-300 p-2 rounded-lg">
      <div className="flex justify-center items-center space-x-4">
        <span className="text-lg text-white">Selesaikan pesanan dalam:</span>
        <div className="flex space-x-2">
          {["hours", "minutes", "seconds"].map((unit, index) => (
            <div
              key={index}
              className="flex flex-col items-center  border-2 border-orange-400 bg-orange-400 p-2"
            >
              <span className="text-2xl  text-white">
                {timeLeft[unit] || "0"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
