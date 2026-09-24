import React, { useState, useEffect } from "react";

export const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { días: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto my-8'>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className='glass-card rounded-2xl p-4 md:p-6 text-center transform hover:-translate-y-1 transition-all duration-300 border border-wapizima-500/20'
        >
          <span className='block text-3xl md:text-5xl font-extrabold text-white tracking-wider font-serif'>
            {String(value || 0).padStart(2, "0")}
          </span>
          <span className='text-xs md:text-sm text-wapizima-400 font-semibold uppercase tracking-widest mt-1 block'>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
