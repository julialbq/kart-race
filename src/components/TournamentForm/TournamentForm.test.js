import { render, screen } from "@testing-library/react";
import { TournamentForm } from "./TournamentForm";


describe('<TournamentForm />', () => {
  describe('should render all elements', () => {
    it('renders the title', () => {
      render(<TournamentForm />)

      const title = screen.getByRole('heading', {name: /register a tournament/i})

      expect(title).toBeInTheDocument()
    })
    it('renders the tournament input', () => {
      render(<TournamentForm />)

      const tournamentInput = screen.getByLabelText(/tournament:/i)

      expect(tournamentInput).toBeInTheDocument()
    })
    it('renders the button to add new tournament', () => {
      render(<TournamentForm />)

      const addButton = screen.getByRole('button', { name: /add tournament/i})

      expect(addButton).toBeInTheDocument()
    })
  })
})
