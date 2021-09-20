import { render, screen } from "@testing-library/react";
import App from "../App";
import "../Services/firebase";

test("renders react app link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Profile/i);
  expect(linkElement).toBeInTheDocument();
});

test("test Vasya", () => {
  const app = render(<App name={"Vasya"} />);
  const linkElement = screen.getByText(/Profile/i);
  expect(linkElement).toBeInTheDocument();
});