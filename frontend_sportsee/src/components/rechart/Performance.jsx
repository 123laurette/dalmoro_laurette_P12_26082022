import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';

/**
 * Name the different performance categories
 * @param {object} kind 
 * @returns string ou null
 */
function namePerf(kind){
    switch(kind){
        case 1 : return "cardio";
        case 2 : return "energy";
        case 3 : return "endurance";
        case 4 : return "strength";
        case 5 : return "speed";
        case 6 : return "intensity";
        default : return null;
    }
}
/**
 * Display performance of a user
 * @component
 * @param {array} userPerformance - array datas performance
 * @returns component jsx - chart
 */

const PerformanceGraph = ({userPerformance}) => {
    return (
        <div className="squareGraph performGraph">
            <ResponsiveContainer   width="100%" aspect={1} >
                
                <RadarChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }} style={{backgroundColor: "#282D30"}}  data={userPerformance} >

                    <PolarGrid radialLines={false} />

                    <PolarAngleAxis dataKey="kind" tickFormatter={namePerf} tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:12}}/>

                    <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

                    <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />

                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceGraph;