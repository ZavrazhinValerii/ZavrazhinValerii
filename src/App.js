import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react app link", () => {
  render(<App />);
  const linkElement = screen.getByText(/react app/i);
  expect(linkElement).toBeInTheDocument();
});

test("test Vasya", () => {
  render(<App name={"Vasya"} />);
  const linkElement = screen.getByText(/Vasya/i);
  expect(linkElement).toBeInTheDocument();
});