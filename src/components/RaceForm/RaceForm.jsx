import { useEffect, useState } from "react";
import { api } from "../../api/api";

export const RaceForm = () => {
  const [tournaments, setTournaments] = useState([]);
  const [pilots, setPilots] = useState([]);

  const [tournament, setTournament] = useState('')
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [firstPlace, setFirstPlace] = useState({racer_id:'', position: 1})
  const [secondPlace, setSecondPlace] = useState({racer_id:'', position: 2})
  const [thirdPlace, setThirdPlace] = useState({racer_id:'', position: 3})
  const [placements, setPlacements] = useState([])

  useEffect(() => {
    fetch(`${api}/racers/`)
      .then((response) => response.json())
      .then((response) => setPilots(...pilots, response))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${api}/tournaments/`)
      .then((response) => response.json())
      .then((response) => setTournaments(...tournaments, response))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()

    setPlacements(firstPlace, secondPlace, thirdPlace)

   fetch(`${api}/races/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tournament_id: tournament,
      place: place,
      date: date,
      placements_attributes: placements
    }),
  })
  .then((response) => response.json())
  .cacth((error) => console.log(error))

  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label name="tournament">
          Tournament:
          <select name="tournament" id="tournament" value={tournament} onChange={(e) => setTournament(e.target.value)} >
            <option value="">Select tournament</option>
            {tournaments.map((tournament) => (
              <option key={tournament.id} value={tournament.id}>
                {tournament.name}
              </option>
            ))}
          </select>
        </label>
        <label name="place">
          Place:
          <input type="text" name="place" id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </label>
        <label name="date">
          Date:
          <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label name="first-place">
          First Place:
          <select name="first-place" id="first-place" value={firstPlace.racer_id} onChange={(e) => setFirstPlace({racer_id: e.target.value})} >
            <option value="">Select a pilot</option>
            {pilots.map((pilot) => (
              <option key={pilot.id} value={pilot.id}>
                {pilot.name}
              </option>
            ))}
          </select>
        </label>
        <label name="second-place">
          Second place:
          <select name="second-place" id="second-place" value={secondPlace.racer_id} onChange={(e) => setSecondPlace({racer_id: e.target.value})}>
            <option value="">Select a pilot</option>
            {pilots.map((pilot) => (
              <option key={pilot.id} value={pilot.id}>
                {pilot.name}
              </option>
            ))}
          </select>
        </label>
        <label name="third-place">
          Third place:
          <select name="third-place" id="third-place" value={thirdPlace.racer_id} onChange={(e) => setThirdPlace({racer_id: e.target.value})}>
            <option value="">Select a pilot</option>
            {pilots.map((pilot) => (
              <option key={pilot.id} value={pilot.id}>
                {pilot.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add race</button>
      </form>
    </div>
  );
};
