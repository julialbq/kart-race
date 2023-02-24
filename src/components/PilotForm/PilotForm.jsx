export const PilotForm = () => {
  return (
    <div>
      <label name="name">
        Name:
        <input type="text" name="name" id="name" />
      </label>
      <label name="birthdate">
        Birthdate:
        <input type="text" name="birthdate" id="birthdate" />
      </label>
      <label name="picture">
        Picture:
        <input type="text" name="picture" id="picture" />
      </label>
    </div>
  );
};
