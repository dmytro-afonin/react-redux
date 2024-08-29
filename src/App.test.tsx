import { render, screen } from "@testing-library/react"
import App from "./App"


describe('App component', () => {
    test('Test 1', () => {
        render(<App/>);
        const headerComponent = screen.getByText(/Hello App/i);
        expect(headerComponent).toBeInTheDocument();
    });
});
