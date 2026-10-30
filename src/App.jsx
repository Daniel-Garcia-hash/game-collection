import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { useState } from "react";

const [search, setSearch] = useState("");

<input

    className="search-input"

    type="text"

    placeholder="Zoek een game..."

    value={search}

    onChange={(e) => setSearch(e.target.value)}

/>


function App() { 
    const games = [

    {
        id: 1,
        title: "Minecraft",
        platform: "PC"
    },

    {
        id: 2,
        title: "Mario Kart",
        platform: "Nintendo Switch"
    },

    {
        id: 3,
        title: "Rocket League",
        platform: "PlayStation 5"
    },

    {
        id: 4,
        title: "Lobotomy Corporation",
        platform: "PC"
    },

    {
    id: 5,
    title: "The Legend of Zelda",
    platform: "Nintendo Switch"
    },

    {
    id: 6,
    title: "Fortnite",
    platform: "PC"
    },

    {
    id: 7,
    title: "EA Sports FC 26",
    platform: "PlayStation 5"
    }
];
 return ( 
<div className="container">

    <Header title="🎮 Game Collection" />

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
 
export default App