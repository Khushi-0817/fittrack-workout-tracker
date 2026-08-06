import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardStats from "../components/DashboardStats";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutCard from "../components/WorkoutCard";
import SearchBar from "../components/SearchBar";

import "../styles/Home.css";
import WeeklyChart from "../components/WeeklyChart";

import "../styles/Analytics.css";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const fetchWorkouts = async () => {
    try {
      const response = await api.get("/workouts");
      setWorkouts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || workout.category === category;

    const matchesDifficulty =
      difficulty === "" || workout.difficulty === difficulty;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty
    );
  });

  return (
    <>
      <Navbar />

      <main className="home-page">

        <div className="container">

          <section className="hero">

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Track your workouts, stay consistent and become stronger every day.
            </p>

          </section>

          <DashboardStats workouts={filteredWorkouts} />
          <WeeklyChart
workouts={filteredWorkouts}
/>

          <SearchBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />

          <section className="dashboard-layout">

            <aside className="left-panel">

              <WorkoutForm
                fetchWorkouts={fetchWorkouts}
              />

            </aside>

            <section>

              {filteredWorkouts.length > 0 ? (
                filteredWorkouts.map((workout) => (
                  <WorkoutCard
                    key={workout._id}
                    workout={workout}
                    fetchWorkouts={fetchWorkouts}
                  />
                ))
              ) : (
                <div className="empty-state">

                  <h2>No workouts found</h2>

                  <p>
                    Start by adding your first workout.
                  </p>

                </div>
              )}

            </section>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Home;