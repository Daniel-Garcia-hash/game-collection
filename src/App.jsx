import "./App.css";
import Header from "./components/Header";
import footer from "./components/Footer";
function App() { 
 return ( 
<div className="container">

    <Header />

    <div className="games">

        <h2>Welkom bij mijn eerste React-applicatie!</h2>

        <p>Naam: Jouw naam</p>

        <p>Studentnummer: Jouw studentnummer</p>

        <p>Klas: Jouw klas</p>

    </div>

    <Footer />

</div>
 ); 
} 
 
export default App