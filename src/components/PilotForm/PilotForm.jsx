import { useState } from "react";
import { api } from "../../api/api";

export const PilotForm = ({fetchPilots}) => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${api}/racers/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        born_at: birthdate,
        image_url: picture,
      }),
    })
      .then((response) => response.json())
      .then(() => fetchPilots())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label name="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label name="birthdate">
          Birthdate:
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </label>
        <label name="picture">
          Picture:
          <input
            type="text"
            name="picture"
            id="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </label>
        <button type="submit">Add pilot</button>
      </form>
    </div>
  );
};
