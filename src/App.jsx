import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

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
    }

];
 return ( 
<div className="container">

    <Header title="🎮 Game Collection" />

    <div className="games">

{games.map((game) => (

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