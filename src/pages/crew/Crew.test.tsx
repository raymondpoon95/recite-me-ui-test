import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Crew from "./Crew";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("crew members page", () => {
  test("data rendered", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Crew />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(screen.getByText("Name: Robert Behnken")).toBeInTheDocument()
    );
  });

  test("search function", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Crew />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    const searchBox = screen.getByPlaceholderText("Search...");

    await userEvent.click(searchBox);
    await userEvent.type(searchBox, "douglas");

    await waitFor(() => {
      expect(screen.getByText("Name: Douglas Hurley")).toBeInTheDocument();
    });
  });
});
