import "../styles/DashboardStats.css";

function DashboardStats({ workouts }) {
  const safeWorkouts = Array.isArray(workouts) ? workouts : [];

  const totalWorkouts = safeWorkouts.length;

  const totalCalories = safeWorkouts.reduce(
    (sum, workout) => sum + (Number(workout.calories) || 0),
    0
  );

  const totalDuration = safeWorkouts.reduce(
    (sum, workout) => sum + (Number(workout.duration) || 0),
    0
  );

  const averageLoad =
    totalWorkouts > 0
      ? (
          safeWorkouts.reduce(
            (sum, workout) => sum + (Number(workout.load) || 0),
            0
          ) / totalWorkouts
        ).toFixed(1)
      : "0.0";

  const stats = [
    {
      id: "workouts",
      icon: "💪",
      value: totalWorkouts,
      label: "Total Workouts",
      description: "Workouts recorded",
    },
    {
      id: "calories",
      icon: "🔥",
      value: totalCalories.toLocaleString(),
      label: "Calories Burned",
      description: "Total energy burned",
    },
    {
      id: "duration",
      icon: "⏱️",
      value: totalDuration.toLocaleString(),
      label: "Active Minutes",
      description: "Time spent training",
    },
    {
      id: "load",
      icon: "🏋️",
      value: `${averageLoad} kg`,
      label: "Average Load",
      description: "Average training weight",
    },
  ];

  return (
    <section className="dashboard-stats">
      <div className="stats-heading">
        <div>
          <span className="stats-eyebrow">OVERVIEW</span>
          <h2>Your Progress</h2>
          <p>Keep track of your workout performance.</p>
        </div>

        <span className="stats-status">
          <span className="status-dot"></span>
          Live Stats
        </span>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article
            className={`stat-card stat-card-${stat.id}`}
            key={stat.id}
          >
            <div className="stat-top">
              <div className="stat-icon">{stat.icon}</div>

              <span className="stat-trend">↗</span>
            </div>

            <div className="stat-content">
              <h3>{stat.value}</h3>

              <p className="stat-label">{stat.label}</p>

              <span className="stat-description">
                {stat.description}
              </span>
            </div>

            <div className="stat-decoration"></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DashboardStats;