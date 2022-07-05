import {getByTestId, render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Todo from "./Todo";

describe("Layout of Todo", () => {
    it("view layout should have checkbox", async() => {
        const {getByTestId} = render(<Todo />);
        expect(getByTestId("todo-checkbox")).toBeInTheDocument()  
      });

    it("view layout should have edit button", async() => {
        const {getByTestId} = render(<Todo />);
        expect(getByTestId("todo-edit")).toBeInTheDocument();
    });
    it("view layout should have delete button", async() => {
        const {getByTestId} = render(<Todo />);
        expect(getByTestId("todo-delete")).toBeInTheDocument();
    });
    test("View Component should display the name of the task", async () => {
        const { getByTestId } = render(<Todo id="todo-1" name="Eat" />);
        expect(getByTestId("todo-name")).toHaveTextContent("Eat");
    });
    it("Edit Layout should have a form", async () => {
        const { getByTestId } = render(<Todo />);
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-form")).toBeInTheDocument();
      });
    it("Edit Layout should have a label", async () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-label")).toHaveTextContent(
          "New name for taskName"
        );
      });
    
      it("Edit layout should have input to change the task name", async () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-input")).toBeInTheDocument();
      });
    
      it("Edit layout should have a cancel button", () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-cancel")).toBeInTheDocument();
      });
    
      it("Edit layout should have a Save button", () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-save")).toBeInTheDocument();
      });
    });
    
    describe("Functionality of Todo Component", () => {
      const deleteTask = jest.fn();
      const editTask = jest.fn();
      test("checking delete functionaltiy of Todo", async () => {
        const { getByTestId } = render(
          <Todo
            id="todo-1"
            completed={false}
            name="taskName"
            deleteTask={deleteTask}
          />
        );
        fireEvent.click(getByTestId("todo-delete"));
        expect(deleteTask).toBeCalledTimes(1);
      });
    
      test("checking if edit View is shown on clicking edit button", async () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        expect(getByTestId("todo-edit-form")).toBeInTheDocument();
      });
    
      test("App should take back to View Template on clicking cancel button in edit View", async () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" />
        );
        fireEvent.click(getByTestId("todo-edit"));
        fireEvent.click(getByTestId("todo-edit-cancel"));
        expect(getByTestId("todo-checkbox")).toBeInTheDocument();
      });
    
      test("App should call the update method for the new task name set", async () => {
        const { getByTestId } = render(
          <Todo id="todo-1" completed={false} name="taskName" editTask={editTask} />
        );
        fireEvent.click(getByTestId("todo-edit"));
        fireEvent.change(getByTestId("todo-edit-input"), {
          target: {
            value: "Hello123",
          },
        });
        fireEvent.click(getByTestId("todo-edit-save"));
        expect(editTask).toHaveBeenCalledTimes(1);
      });
    })
    


