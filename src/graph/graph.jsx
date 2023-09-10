import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import boy from './tableConvert.com_male.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36
];

const data = {
  labels,
  datasets: [
    {
      spanGaps: true,
      label: 'Dataset 1',
      data:['1.5', '1.92', '2.95', null, '4.56' , '4.98', '5.725','6.415','6.99','7.17'],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ],
};

function plotBoyBabyData(dataBoy){
  if(dataBoy !== undefined){
    dataBoy.forEach(element => {
      const keys = Object.keys(element);
      const tmpArr = element[keys[0]];
      const updatedArr = [];
      for(var i = 1 ; i < 36; i++){
        updatedArr[i] = (tmpArr[i] + tmpArr[i+1])/2;
      }
      updatedArr[0] = tmpArr[0];
      updatedArr[36] = tmpArr[37];

      const tmpDataSet = {
        spanGaps: true,
        label: keys[0],
        data:updatedArr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      };
      data.datasets.push(tmpDataSet);
    });
  }
}

export default function graph() {
  plotBoyBabyData(boy);
  return <Line options={options} data={data} />;
}
