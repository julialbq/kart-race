import { useEffect, useState } from "react"
import { Pilot } from "../Pilot/Pilot"
import { api } from "../../api/api"

export const Pilots = () => {
  const [pilots, setPilots] = useState([])


  useEffect(() => {
    fetch(`${api}/racers/`)
    .then(response => response.json())
    .then(response => setPilots(...pilots, response))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <ul>
        {pilots.map(pilot => <Pilot key={pilot.id} pilot={pilot} />)}
      </ul>
    </div>
  )
}
