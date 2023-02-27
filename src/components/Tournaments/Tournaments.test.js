import { render, screen } from "@testing-library/react";
import { Tournaments } from "./Tournaments";

const renderSetUp = () => {
  const tournamentList = [
    {
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
    },
    {
      id: 2,
      name: "name",
      racers: [
        {
          id: 2,
          name: "maria ",
          born_at: "1987-11-16",
          image_url: "https://www.fakeurl.com/photo.jpg",
          points: 15,
        },
      ],
      races: [
        {
          id: 2,
          tournament_id: 2,
          place: "somewhere",
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
    },
  ];

  return render(<Tournaments tournaments={tournamentList} />)
};

describe("<Tournaments />", () => {
  describe("should render the Tournament components elements", () => {
    it('renders the title of the component', () => {
      renderSetUp()
      const title = screen.getByRole("heading", { name: /tournaments/i });

      expect(title).toBeInTheDocument();
    })
    it('renders the tournament list', () => {
      renderSetUp()

      const list = screen.getByRole("list", { name: "" });

      expect(list).toBeInTheDocument(); 
    })
  })
})
