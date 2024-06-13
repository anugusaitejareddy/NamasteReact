import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("contact component to have text of contact page", () => {
  render(<Contact />);
  const text = screen.getByText("Contact Page");
  expect(text).toBeInTheDocument();
});

test.skip("Contact component to have name input", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Name");
  expect(nameInput).toBeInTheDocument();
});

test.skip("Contact component should load submit button", () => {
  render(<Contact />);
  const SubmitBtn = screen.getByRole("button");
  expect(SubmitBtn).toBeInTheDocument();
});

test.skip("Contact component to have two input elements", () => {
  render(<Contact />);
  const InputElements = screen.getAllByRole("textbox");
  expect(InputElements.length).toBe(2);
});
