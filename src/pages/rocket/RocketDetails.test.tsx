import { screen, render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RocketDetails from "./RocketDetails";

describe("rocket details", () => {
  test("data rendered", async () => {
    const testId = "5e9d0d95eda69955f709d1eb";
    render(
      <MemoryRouter initialEntries={[`/rocket/${testId}`]}>
        <Routes>
          <Route path="/rocket/:id" element={<RocketDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Name: Falcon 1")).toBeInTheDocument();
      expect(
        screen.getByText("Country: Republic of the Marshall Islands")
      ).toBeInTheDocument();
    });
  });
});
