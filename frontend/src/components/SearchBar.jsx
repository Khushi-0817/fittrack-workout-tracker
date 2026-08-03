import "../styles/SearchBar.css";

function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
  difficulty,
  setDifficulty,
}) {
  return (
    <section className="search-container">
      <div className="search-input">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search workouts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Strength">Strength</option>
        <option value="Cardio">Cardio</option>
        <option value="Yoga">Yoga</option>
        <option value="HIIT">HIIT</option>
        <option value="Running">Running</option>
        <option value="Cycling">Cycling</option>
        <option value="Stretching">Stretching</option>
      </select>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </section>
  );
}

export default SearchBar;