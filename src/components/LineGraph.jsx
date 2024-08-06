import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export default function LineGraph(){
    
    const generateRandomData = () => {
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const data = labels.map(() => Math.floor(Math.random() * 100));

        return {
            labels,
            datasets: [
            {
                label: 'My First dataset',
                data,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointStyle: 'rectRounded',
                pointRadius: 6,
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                pointHoverBorderWidth: 2,
                tension: 0.4,
            },
            ],
        };
    };
    const [chartData, setChartData] = useState(generateRandomData());
    const handleButtonClick = () => {
        setChartData(generateRandomData());
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Styled Line Chart Example',
            },
            datalabels: {
                display: true,
                align: 'top',
                formatter: (value) => value,
                color: 'white',
                font:
                {
                    size: 18, // Adjust the font size
                    weight: 'bold', // Adjust the font weight
                },                
            },
        },
        scales: 
        {
            y: {
                min: 0,
                max: 100,
            },
        },
    };
    // const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //     {
    //         label: 'My First dataset',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         fill: false,
    //         backgroundColor: 'rgb(75, 192, 192)',
    //         borderColor: 'rgba(75, 192, 192, 1)',
    //         borderWidth: 2,
    //         pointStyle: 'rectRounded',
    //         pointRadius: 6,
    //         pointBorderColor: 'rgba(75, 192, 192, 1)',
    //         pointBackgroundColor: '#fff',
    //         pointBorderWidth: 2,
    //         pointHoverRadius: 8,
    //         pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
    //         pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
    //         pointHoverBorderWidth: 2,
    //         tension: 0.4, // Curve the line
    //     },
    //     ],
    // };

    // --------------------------------------------------------------------------------------
    return(
        <>
            <h1>Line Graph</h1>
            <button onClick={handleButtonClick}>Generate New Data</button>
            <Line options={options} data={chartData}/>
        </>
    );
}