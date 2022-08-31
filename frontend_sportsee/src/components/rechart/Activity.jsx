import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userActivityData } from '../../data/mockData';

const data={userActivityData}


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis orientation='right'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" name='Poids (kg)' fill="#282d30" />
          <Bar dataKey="calories" name='Calories brulées (kCal)' fill="#e60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

//"Poids(kg)"
//"Calories Brulées (kCal)"
