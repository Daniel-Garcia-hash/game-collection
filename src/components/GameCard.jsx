import { useState } from "react";

function GameCard({ image, title, platform, genre, rating, year }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="game-card">
      <img
        src={`/images/${image}`}
        alt={title}
        className="game-image"
      />
      <h2>{title}</h2>
      <p>Platform: {platform}</p>
      <p>Genre: {genre}</p>
      <p>Rating: ⭐ {rating}</p>
      <p>Jaar: {year}</p>

      <button
        className="favorite-button"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "❤️ Favoriet" : "🤍 Favoriet"}
      </button>
    </div>
  );
}

export default GameCard;    