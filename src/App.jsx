import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { useState } from "react";
import games from "./data/games.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <input
        className="search-input"
        type="text"
        placeholder="Zoek een game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="games">
        {games
          .filter((game) =>
            game.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((game) => (
<GameCard
    key={game.id}
    title={game.title}
    platform={game.platform}
    genre={game.genre}
    rating={game.rating}
    year={game.year}
    />
          ))}

        <p>Naam: Daniel Garcia</p>
        <p>Studentnummer: 2196889</p>
        <p>Klas: 25A</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;