const ClockMenu = ({ state, sessionTime, breakTime, plusOrMinus, isRunning }) => {
    return (
        <div className={`clockMenu ${state ? 'visible' : 'hidden'}`}>
            <span>Work time: {sessionTime.mm}</span>
            <div>
                <button style={{ cursor: isRunning && "not-allowed" }} onClick={() => plusOrMinus('+', 'session')}>+</button>
                <button style={{ cursor: isRunning && "not-allowed" }} onClick={() => plusOrMinus('-', 'session')}>-</button>
            </div>
            <span>Break Time: {breakTime.mm}</span>
            <div><button style={{ cursor: isRunning && "not-allowed" }} onClick={() => plusOrMinus('+', 'break')}>+</button>
                <button style={{ cursor: isRunning && "not-allowed" }} onClick={() => plusOrMinus('-', 'break')}>-</button>
            </div>
        </div>
    );
};

export default ClockMenu;
