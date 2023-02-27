import { Tournament } from "../Tournament/Tournament";

export const Tournaments = ({ tournaments }) => {
  return (
    <div>
      <h2>Tournaments</h2>
      <ul>
        {tournaments.map((tournament) => (
          <Tournament key={tournament.id} tournament={tournament} />
        ))}
      </ul>
    </div>
  );
};
