import { useState, useEffect } from "react"
import './Calculator.css'
export default function Calculator() {
    const [display, setDisplay] = useState({ numVal: '', calculated: false })
    const [val, setval] = useState({ str: '', isTrue: false })
    const arr = Array.from({ length: 19 }, () => 0)
    const btns = ['C', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

    function calculate() {
        try {
            if (eval(val.str).toString().length > 13) {
                setDisplay({ calculated: true, numval: eval(val.str).toExponential() })
            } else {
                setDisplay({ numVal: eval(val.str), calculated: true })
            }
        }
        catch (e) {
            setDisplay({ numVal: 'err', calculated: true })
        }
    }
    const handleVal = (e) => {
        let value = e.target.innerText
        if (value === '÷') {
            value = '/'
        } if (value === 'x') {
            value = '*'
        }
        const regex = /[-x\+\/*%]/
        const test = regex.test(value)
        if (value === '=') {
            calculate()
        } else if (value === 'C') {
            setDisplay({ numVal: '' })
            setval({ ...val, str: '' })
        } else if (value === '+/-') {
            setDisplay({ numVal: display.numVal[0] === '-' ? `${display.numVal.slice(1)}` : `-${display.numVal}` })
            setval({ ...val, str: val.str[0] === '-' ? `${val.str.slice(1)}` : `-${val.str}` })
        }
        else {
            setDisplay({ ...display, calculated: false })
            if (!(val.str[val.str.length - 1] === '.' && value === '.' || val.str[val.str.length - 1] === '0' && value === '0')) {
                if (val.isTrue && test) {
                    setval({ ...val, str: val.str + value, isTrue: false })
                    setDisplay({ numVal: '' })
                } else {
                    setDisplay({ numVal: display.numVal + value })
                    setval({ ...val, isTrue: true, str: val.str + value })
                }
            }
        }

    }
    return (
        <div className="phone-screen">
            <div className="notch">
                <div className="speaker"></div>
                <div className="camera"></div>
                {<h4 className="calcExpression">{display.calculated ? val.str : ''}</h4>}
                <h1 className="calcResult">{!val.str ? '0' : display.numVal}</h1>
                <div className="calcBtnBox">
                    {arr.map((a, i) => {
                        return <button key={i} id={btns[i]} className="calcBtns" onClick={handleVal}>{btns[i]}</button>
                    })}
                </div>
            </div>
        </div >
    )
}