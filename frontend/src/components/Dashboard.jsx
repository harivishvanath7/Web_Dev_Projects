import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(car => car.model);
                const mileage = data.map(car => car.mileage);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Mileage',
                            data: mileage,
                            backgroundColor: 'rgba(75,192,192,0.6)'
                        }
                    ]
                });
            });
    }, []);

    return (
        <div>
            <h2>Car Mileage Dashboard</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default Dashboard;
