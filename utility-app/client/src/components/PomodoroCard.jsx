import React, { useEffect, useState } from "react";

const PomodoroCard = ({ time }) => {
  // Ensure time is a non-negative number
  const initialTime = typeof time === "number" && time >= 0 ? time : 0;

  const [pomodoroTime, setPomodoroTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPomodoroTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-base-100 rounded-xl p-4 justify-center items-center flex">
      {pomodoroTime}
    </div>
  );
};

export default PomodoroCard;
