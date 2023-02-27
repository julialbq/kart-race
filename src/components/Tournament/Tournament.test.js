import { render, screen } from "@testing-library/react";
import { Tournament } from "./Tournament";

const renderSetUp = () => {
  const tournament = {
    id: 1,
    name: "Tournament name",
    racers: [
      {
        id: 1,
        name: "Paulo Vilarinho",
        born_at: "1997-11-16",
        image_url: "https://www.fakeurl.com/photo.jpg",
        points: 15,
      },
    ],
    races: [
      {
        id: 1,
        tournament_id: 1,
        place: "Interlagos",
        date: "2022-12-10",
        placements: [
          {
            id: 1,
            racer_id: 1,
            position: 1,
          },
        ],
      },
    ],
  };

  return render(<Tournament tournament={tournament} />);
};

describe("<Tournament />", () => {
  describe("should render the tournament's information", () => {
    it('renders the tournaments name', () => {
      renderSetUp()

      const tournamentName = screen.getByText(/tournament name/i)

      expect(tournamentName).toBeInTheDocument()
    })
  });
});
