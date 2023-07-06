import React, { useState, useEffect } from "react";
import ClockMenu from "./ClockMenu";
import Timer from "./Timer";
import './StopWatch.css';

export default function StopWatch() {
    const [sessionTime, setSessionTime] = useState({ mm: 25, ss: 0 });
    const [time, setTime] = useState({ ...sessionTime });
    const [breakTime, setBreakTime] = useState({ mm: 1, ss: 0 });
    const [timer, setTimer] = useState({ isRunning: false, id: null, break: false });
    const [menu, setMenu] = useState(false);

    function stop() {
        clearInterval(timer.id);
        setTimer((t) => {
            return { ...t, isRunning: false, id: null };
        });
    }

    useEffect(() => {
        if (time.mm === 0 && time.ss === 0 && !timer.isRunning) {
            if (timer.break) {
                setTime(() => {
                    return { mm: sessionTime.mm, ss: sessionTime.ss };
                });
            } else {
                setTime(() => {
                    return { mm: breakTime.mm, ss: breakTime.ss };
                });
            }
            startStopCount();
            setTimer((t) => {
                return { ...t, break: !timer.break };
            });
        }
    }, [time.mm, timer.isRunning]);

    function startStopCount() {
        if (!timer.isRunning) {
            const myInterval = setInterval(() => {
                setTime((t) => {
                    if (t.ss === 0) {
                        if (t.mm === 0) {
                            clearInterval(myInterval);
                            stop();
                            return { mm: 0, ss: 0 };
                        } else {
                            return { mm: t.mm > 0 ? t.mm - 1 : t.mm, ss: 59 };
                        }
                    } else {
                        return { ...t, ss: t.ss - 1 };
                    }
                });
            }, 1000);
            setTimer({ ...timer, isRunning: true, id: myInterval });
        } else {
            stop();
        }
    }

    function plusOrMinus(operator, type) {
        if (type === 'session' && !timer.isRunning) {
            setSessionTime((t) => {
                const newSessionTime = {
                    ...t,
                    mm: operator === '+' ? (t.mm < 60 ? t.mm + 1 : t.mm) : t.mm > 1 ? t.mm - 1 : t.mm
                };
                if (!timer.break) {
                    setTime(newSessionTime);
                }
                return newSessionTime;
            });
        } else if (type === 'break' && !timer.isRunning) {
            setBreakTime((t) => {
                const newBreakTime = {
                    ...t,
                    mm: operator === '+' ? (t.mm < 25 ? t.mm + 1 : t.mm) : t.mm > 1 ? t.mm - 1 : t.mm
                };
                if (timer.break) {
                    setTime(newBreakTime);
                }
                return newBreakTime;
            });
        }
    }

    function hideMenu() {
        setMenu(!menu);
    }

    return (
        <>
            <ClockMenu isRunning= {timer.isRunning} state={menu} sessionTime={sessionTime} breakTime={breakTime} plusOrMinus={plusOrMinus} />

            <div className="wrapper">
                <span onClick={hideMenu} className="material-symbols-outlined clockSetting">
                    menu
                </span>
                <div className="sessionBreak">
                    <div style={{ color: !timer.break ? 'orange' : '' }}>Work</div>
                    <div style={{ color: timer.break ? 'orange' : '' }}>Break</div>
                </div>

                <Timer time={time} timer={timer} startStopCount={startStopCount} />

                <span onClick={startStopCount}>
                    <i className="material-symbols-outlined h">{timer.isRunning ? 'pause' : 'play_arrow'}</i>
                </span>
            </div>
        </>
    );
}
