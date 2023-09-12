import './CharBar.css'

export default function ChartBar(props) {
    let barFillHeight = '0%'
    if (props.sumVal > 0) {
        barFillHeight = Math.round((props.value / props.sumVal) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}