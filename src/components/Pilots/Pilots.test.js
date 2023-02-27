import { render, screen } from "@testing-library/react";
import { Pilots } from "./Pilots";

const renderSetUp = () => {
  const pilotList = [
    {
      id: 1,
      name: "julia",
      born_at: "2000-01-01",
      image_url: "picture",
    },
    {
      ids: 2,
      name: "maria",
      born_at: "1998-01-01",
      image_url: "picture",
    },
  ];

  return render(<Pilots pilots={pilotList} />);
};

describe("<Pilots />", () => {
  describe("should render the Pilots component elements", () => {
    it("renders the title of the component", () => {
      renderSetUp();

      const title = screen.getByRole("heading", { name: /pilots/i });

      expect(title).toBeInTheDocument();
    });
    it("renders the name of the pilot", () => {
      renderSetUp();

      const list = screen.getByRole("list", { name: "" });

      expect(list).toBeInTheDocument();
    });
  });
});
