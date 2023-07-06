
export default function AudioBtns({ id, src, playAudio, state }) {
    return (
        <button className="btns" onClick={() => state && playAudio(src)} id={id} > {id}</button >
    )
}