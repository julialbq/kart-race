import { Pilot } from "../Pilot/Pilot";

export const Pilots = ({ pilots }) => {
  return (
    <div>
      <h2>Pilots</h2>
      <ul>
        {pilots.map((pilot) => (
          <Pilot key={pilot.id} pilot={pilot} />
        ))}
      </ul>
    </div>
  );
};
