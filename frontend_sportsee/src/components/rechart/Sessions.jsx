import React from 'react';
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Rectangle} from "recharts"; 

/**
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns an active tooltip or null
 */
const CustomTooltip=({active, payload})=>{
    if (active) {
        return (
            <div className="customTooltipSession">
                <p className="tooltipDataSession">{`${payload[0].value} `}min</p>
            </div>
        );
}
return null;
}

/** 
 * @returns a grey rectangle displayed with mouth moving over the chart
 */
const CustomCursor = ({points}) => {
    return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={300} />;
};

function nameDay(day){
    switch(day){
        case 1 : return "L";
        case 2 : return "M";
        case 3 : return "M";
        case 4 : return "J";
        case 5 : return "V";
        case 6 : return "S";
        case 7 : return "D";

        default : return null;
    }
}

/**
 * Display user's daily activity chart 
 * @component
 * @param {Array} sessions - user sessions datas
 * @returns {JSX.Element} SessionsGraph component
 */
const SessionsGraph = ({userSessions}) => {
    //console.log(sessions)
    return (
        <div className='squareGraph sessionGraph'>
            <ResponsiveContainer width="100%" aspect={1}>
                <LineChart
                    style={{backgroundColor: "#FF0000"}}
                    width={258}
                    height={263}
                    data={userSessions}
                    margin={{
                        top: 50,
                        right: -2,
                        left: -60,
                        bottom: 10
                    }}>    
                    
                    <CartesianGrid  vertical={false} horizontal={false}/>
                    <XAxis dataKey="day"tickFormatter={nameDay} tickLine={false} fillOpacity={0.5} style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}tick={{fill:"#FFFFFF",  fontWeight:500, fontSize:12}} tickMargin={10}  axisLine={false} interval="preserveStartEnd"/>
                    <YAxis axisLine={false} tickLine={false} tick={false} domain={['dataMin - 5', 'dataMax + 5']}/>
                    <Tooltip  content={<CustomTooltip/>} cursor={<CustomCursor/>}/>
                    <Line type="monotone" dataKey="sessionLength"  stroke="#FFFFFF"dot={false} opacity={0.8} strokeWidth={2}/>
                    <text className='graphTitle' x="12%" y="15%" width={147} height={48}textAnchor="start" dominantBaseline="middle"  fill="#FFFFFF" style={{fontWeight:500, opacity:0.5}} >
                    Durée moyenne des </text>
                    <text className='graphTitle' x="12%" y="25%" width={147} height={48}textAnchor="start" dominantBaseline="middle"  fill="#FFFFFF" style={{ fontWeight:500, opacity:0.5}} >
                    sessions</text>
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SessionsGraph;

