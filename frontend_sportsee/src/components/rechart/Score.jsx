import React from 'react';
import { RadialBarChart, RadialBar,  ResponsiveContainer, PolarAngleAxis } from 'recharts';

/**
 * Display of a user's score as a percentage
 * @component
 * @param {number} userMain/todayScore - datas scores
 * @returns component jsx - chart
 */


const ScoreGraph = ({userMain}) => {
  const data = 
    [{
      uv: userMain,
      fill: '#E60000'
    }]

    return (
      <div className="squareGraph">
        <ResponsiveContainer  width="100%" aspect={1.05}>

          <RadialBarChart cx="50%" cy="50%" style={{backgroundColor: "var(--gris)"}} width="100%" height="100%" margin={{ top: 30, right: 30, bottom: 30, left: 30 }} innerRadius={70}  barSize={10} data={data} startAngle={80} endAngle={450} >
            {/*concerne le container*/}
            
            <circle cx="50%" cy="50%" fill="white" r="70" ></circle>

            <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false}/>

            <RadialBar  background dataKey="uv" angleAxisId={1} fill="var(--red)" cornerRadius="10" data={[data[0]]} />
            {/*concerne le marqueur rouge*/}

            <text className='scoreSize' fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{`${userMain}%`}</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>

            <text className='graphTitle' x="12%" y="15%" width={147} height={48} textAnchor="start" dominantBaseline="middle"  fill="#20253A" style={{ fontWeight:500}} >
            Score </text>

          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default ScoreGraph;
