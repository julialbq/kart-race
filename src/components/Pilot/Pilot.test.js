import { render, screen } from "@testing-library/react";
import { Pilot } from "./Pilot";

const renderSetUp = () => {
  const pilot = {
    id: 1,
    name: "julia",
    born_at: "2000-01-01",
    image_url: "picture",
  };

  return render(<Pilot pilot={pilot} />);
};

describe("<Pilot />", () => {
  describe("should render all the pilot's information", () => {
    it("renders the pilot's name", () => {
      renderSetUp();

      const pilotName = screen.getByText(/name: julia/i);

      expect(pilotName).toBeInTheDocument();
    });
    it("renders the pilot's birthdate", () => {
      renderSetUp();

      const pilotBirthdate = screen.getByText(/birthdate: 2000-01-01/i);

      expect(pilotBirthdate).toBeInTheDocument();
    });
    it("renders the pilot's picture", () => {
      renderSetUp();

      const pilotPicture = screen.getByAltText(/picture/i)

      expect(pilotPicture).toBeInTheDocument();
    });
  });
});
