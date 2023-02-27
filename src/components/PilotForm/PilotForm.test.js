import { render, screen } from "@testing-library/react";
import { PilotForm } from "./PilotForm";

describe('<PilotForm />', () => {
  describe("should render all elements", () => {
    it('renders name input', () => {
      render(<PilotForm />)

      const nameInput = screen.getByLabelText(/name:/i)
      expect(nameInput).toBeInTheDocument()
    })
    it('renders birthdate input', () => {
      render(<PilotForm />)

      const birthInput = screen.getByLabelText(/birthdate:/i)
      expect(birthInput).toBeInTheDocument()
    })
    it('renders picture input', () => {
      render(<PilotForm />)

      const pictureInput = screen.getByLabelText(/picture:/i)
      expect(pictureInput).toBeInTheDocument()
    })
    it('renders button to add new pilot', () => {
      render(<PilotForm />)

      const addButton = screen.getByRole('button', {name: /add pilot/i})
      expect(addButton).toBeInTheDocument()
    })
  })
})
