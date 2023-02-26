import './Pilot.css'

export const Pilot = ({pilot}) => {
  const {name, born_at, image_url} = pilot

  return (
    <li>
      <p>Name: {name}</p>
      <p>Birthdate: {born_at} </p>
      <img src={image_url} alt={name} />
    </li>
  )
}
