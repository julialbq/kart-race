import "./App.css";
import { PilotForm } from "./components/PilotForm/PilotForm";
import { Pilots } from "./components/Pilots/Pilots";
import { TournamentForm } from "./components/TournamentForm/TournamentForm";
import { Tournaments } from "./components/Tournaments/Tournaments";

function App() {
  return (
    <div className="App">
      <PilotForm fetchPilots={fetchPilots} />
      <Pilots />
      <TournamentForm />
      <Tournaments />
    </div>
  );
}

export default App;
