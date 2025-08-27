import React from "react"; // Required for Jest
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For matchers like toBeInTheDocument
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
