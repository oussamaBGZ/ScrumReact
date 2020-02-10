import React from "react";
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
    waitForDomChange
} from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

test("make sure I can submit a todo", async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
        <App />
    );

    const todoInput = getByPlaceholderText("Add your todo");
    const submitButton = getByTestId("submit-form");
    fireEvent.submit(submitButton);
    await waitForDomChange();
    fireEvent.change(todoInput, { target: { value: "go to the store" } });
    fireEvent.submit(submitButton);
    await waitForElement(() => getByText("go to the store"));
});