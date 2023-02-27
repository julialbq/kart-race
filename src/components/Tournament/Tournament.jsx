export const Tournament = ({ tournament }) => {

  return (
    <li>
      <p>Name: {tournament.name}</p>
      <p>Races: {tournament.races}</p>
    </li>
  );
};
