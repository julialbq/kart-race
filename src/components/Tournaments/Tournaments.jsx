import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Tournament } from "../Tournament/Tournament";

export const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
 

  useEffect(() => {
    fetch(`${api}/tournaments/`)
      .then((response) => response.json())
      .then((response) => setTournaments(...tournaments, response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {tournaments.map((tournament) => (
        <Tournament key={tournament.id} tournament={tournament} />
      ))}
    </ul>
  );
};
