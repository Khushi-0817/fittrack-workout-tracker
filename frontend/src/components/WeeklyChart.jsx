import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function WeeklyChart({ workouts }) {

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const chartData = days.map((day) => ({
    day,
    workouts: 0,
  }));

  workouts.forEach((workout) => {

    const date = new Date(workout.createdAt);

    const dayIndex =
      (date.getDay() + 6) % 7;

    chartData[dayIndex].workouts += 1;

  });

  return (

    <div className="chart-card">

      <h2>
        Weekly Activity
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="day" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="workouts"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default WeeklyChart;