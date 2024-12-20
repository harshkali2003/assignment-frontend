import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";
import MainOne from "./MainOne";
import MainThree from "./MainThree";
import MainTwo from "./MainTwo";

export default function OverView() {
  const [metrics, setMetrics] = useState({
    userCount: 100,
    revenue: 500,
    activeSessions: 80,
  });

  // Sample data for charts
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [100, 200, 300, 400, 500],
        borderColor: "green",
        backgroundColor: "blue",
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    // Example: Fetch real-time data updates
    const interval = setInterval(() => {
      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        activeSessions:
          prevMetrics.activeSessions + Math.floor(Math.random() * 10 - 5),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
        {/* Widgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(metrics).map(([key, value]) => (
            <div
              key={key}
              className="p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <Line data={chartData} />
          </div>

          {/* Bar Chart */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Sales Performance</h3>
            <Bar
              data={{
                labels: ["Q1", "Q2", "Q3", "Q4","Q5"],
                datasets: [
                  {
                    label: "Sales ($)",
                    data: [5000, 7000, 8000, 10000,12000],
                    backgroundColor: "red",
                    borderColor: "blue",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>

      <MainOne />
      <MainTwo />

      <MainThree />
    </>
  );
}
