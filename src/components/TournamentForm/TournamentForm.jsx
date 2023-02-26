import { useState } from "react";
import { api } from "../../api/api";

export const TournamentForm = () => {
  const [tournament, setTournament] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${api}/tournaments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: tournament,
      }),
    })
      .then((response) => response.json())
      .cacth((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label name="tournament">
          Tournament:
          <input
            type="text"
            name="tournament"
            id="tournament"
            value={tournament}
            onChange={(e) => setTournament(e.target.value)}
          />
        </label>
        <button type="submit">Add tournament</button>
      </form>
    </div>
  );
};
