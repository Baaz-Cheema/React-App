import React from "react";

const Timer = ({ time, timer, startStopCount }) => {
  return (
    <div className={`watchBody ${timer.isRunning ? 'pulse' : ''}`}>
      <h1 id="break" className="watchTimer">
        {time.mm < 10 ? '0' + time.mm : time.mm}:{time.ss < 10 ? '0' + time.ss : time.ss}
      </h1>
    </div>
  );
};

export default Timer;
