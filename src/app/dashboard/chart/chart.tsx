'use client'
import styles from './chart.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    visit: 4000,
    income: 2400,
  },
  {
    name: 'Tuesday',
    visit: 3000,
    income: 1398,
  },
  {
    name: 'Wendnesday',
    visit: 2000,
    income: 9800,
  },
  {
    name: 'Thursday',
    visit: 2780,
    income: 3908,
  },
  {
    name: 'Friday',
    visit: 1890,
    income: 4800,
  },
  {
    name: 'Saturday',
    visit: 2390,
    income: 3800,
  },
  {
    name: 'Sunday',
    visit: 3490,
    income: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart