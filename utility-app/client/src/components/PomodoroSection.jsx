// PomodoroSection.js

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PomodoroCard from "./PomodoroCard";

const PomodoroSection = ({ config, onReset }) => {
  const { title, breakTime, intervelCount, intervelTime } = config;
  const [pomodoroPhase, setPomodoroPhase] = useState("work");
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [pomodoroTime, setPomodoroTime] = useState(config.intervelTime * 60); // Initial time in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPomodoroTime((prevTime) => Math.max(prevTime - 1, 0));

      if (pomodoroTime === 0) {
        // Switch between work and break phases
        setPomodoroPhase((prevPhase) =>
          prevPhase === "work" ? "break" : "work"
        );
        setPomodoroCount((prevCount) => prevCount + 1);

        // Reset the timer based on the phase
        setPomodoroTime((prevTime) =>
          pomodoroPhase === "work" ? breakTime * 60 : intervelTime * 60
        );
      }

      if (pomodoroCount === intervelCount * 2) {
        clearInterval(intervalId);
        onReset();
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [
    pomodoroTime,
    pomodoroCount,
    intervelCount,
    intervelTime,
    breakTime,
    onReset,
    pomodoroPhase,
  ]);

  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl mt-4 grid grid-cols-4 gap-4">
      <h1>{title}</h1>
      {pomodoroPhase === "work" ? (
        <PomodoroCard time={pomodoroTime} />
      ) : (
        <PomodoroCard time={breakTime * 60} />
      )}
    </div>
  );
};

PomodoroSection.propTypes = {
  config: PropTypes.shape({
    title: PropTypes.string.isRequired,
    breakTime: PropTypes.number.isRequired,
    intervelTime: PropTypes.number.isRequired,
    intervelCount: PropTypes.number.isRequired,
  }).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PomodoroSection;
