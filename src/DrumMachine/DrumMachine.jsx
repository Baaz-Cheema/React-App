import { useState, useRef, useEffect } from "react";
import AudioBtns from "./AudioBtns";
import './DrumMachine.css'

export default function DrumMachine() {
    const [player, setPlayer] = useState({ type: 'Drum', power: true, volume: 50 })
    const h1ref = useRef(null)
    const drum = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
    const piano = ['https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
    const btns = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']

    useEffect(() => {
        function handleChange(e) {
            const btn = document.getElementById(e.key)
            if (btn) {
                btn.classList.add('effects')
                btn && btn.click()
                setTimeout(() => {
                    btn.classList.remove('effects')
                }, 200);
            }
        }
        window.addEventListener('keydown', handleChange)
        return () => {
            window.removeEventListener('keydown', handleChange)
        }
    }, [])
    function setVolume(e) {
        setPlayer({ ...player, volume: e.target.value })
    }
    function playAudio(src) {
        const audio = new Audio(src)
        audio.volume = player.volume / 100
        audio.play()
    }
    function changePlayer() {
        setPlayer({ ...player, type: player.type === 'Drum' ? 'Piano' : 'Drum' })
    }
    function setPower(e) {
        setPlayer({ ...player, power: !player.power })
    }
    return (
        <>
            <div className="boxz">
                <div className="btnGrp">
                    {btns.map((a, i) => {
                        return <AudioBtns state={player.power}
                            key={i}
                            src={player.type === 'Drum' ? drum[i] : piano[i]}
                            id={a}
                            playAudio={playAudio} />
                    })}
                </div>
                <div className="cntrls">
                    <button className={player.power ? 'active' : 'power'} id="power" onClick={setPower}>
                        <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/controller-music/power-off-icon.png" alt="" />
                    </button>
                    <div className="screen">
                        <span>{player.power ? `Power On ${player.type} ${player.volume} ` : null}</span>
                    </div>
                    <div>
                        <button className='switch' onClick={changePlayer}>SWITCH BANK</button>
                    </div>

                    <label htmlFor="volume"></label>
                    <input type="range" onChange={setVolume} id='volume' />
                </div>
            </div>
            <h4>@Baaz Cheema</h4>
        </>
    )
}


