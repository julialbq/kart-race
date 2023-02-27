import { useEffect, useState } from "react";
import { api } from "./api/api";
import "./App.css";
import { PilotForm } from "./components/PilotForm/PilotForm";
import { Pilots } from "./components/Pilots/Pilots";
import { TournamentForm } from "./components/TournamentForm/TournamentForm";
import { Tournaments } from "./components/Tournaments/Tournaments";

function App() {
  const [pilots, setPilots] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const fetchPilots = () => {
    fetch(`${api}/racers/`)
      .then((response) => response.json())
      .then((response) => setPilots(response))
      .catch((error) => console.log(error));
  };

  const fetchTournaments = () => {
    fetch(`${api}/tournaments/`)
      .then((response) => response.json())
      .then((response) => setTournaments(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPilots();
    fetchTournaments();
  }, []);

  return (
    <div className="App">
      <PilotForm fetchPilots={fetchPilots} />
      <Pilots pilots={pilots} />
      <TournamentForm />
      <Tournaments tournaments={tournaments} />
    </div>
  );
}

export default App;
