import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import "@testing-library/jest-dom";

const mockedAddTodo = jest.fn();

describe("Form Component layout", () => {
  test("check if form tag is present", async () => {
    const { getByTestId } = render(<Form />);
    const formElement = getByTestId("todo-form");
    expect(formElement).toBeDefined();
  });

  test("Heading present on the layout ", async () => {
    const { getByTestId } = render(<Form />);
    const headingElement = getByTestId("form-heading");
    expect(headingElement).toHaveTextContent("What needs to be done?");
  });

  test("Input should not have any initial value", async () => {
    const { getByTestId } = render(<Form />);
    const inputElement = getByTestId("form-input");
    expect(inputElement).toHaveValue("");
  });

  test("Form should have button to submit", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("form-button")).toBeInTheDocument();
  });
});

describe("Test the functionality of Form Component", () => {
  test("should be able to add name to task", async () => {
    const { getByTestId } = render(<Form />);
    fireEvent.change(getByTestId("form-input"), {
      target: {
        value: "Hello",
      },
    });
    expect(getByTestId("form-input")).toHaveValue("Hello");
  });

  test("should be able to add task", async () => {
    const { getByTestId } = render(<Form addTask={mockedAddTodo} />);
    fireEvent.change(getByTestId("form-input"), {
      target: {
        value: "hello",
      },
    });
    fireEvent.click(getByTestId("form-button"));
    expect(getByTestId("form-input")).toHaveTextContent("");
    expect(mockedAddTodo).toBeCalledTimes(1);
  });
})