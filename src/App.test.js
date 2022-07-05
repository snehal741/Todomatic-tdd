import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";

describe("Layout of App", () => {
  it("should have heading", () => {
    const {getByTestId} = render(<App/>)
    const heading = getByTestId("app-heading")
    expect(heading).toHaveTextContent("ToDoMatic")
  })
})