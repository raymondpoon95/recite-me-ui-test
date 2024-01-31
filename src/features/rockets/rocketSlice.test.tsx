import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice, { RocketState, fetchRocketListData } from "./rocketsSlice";

describe("rocket slice", () => {
  test("should handle fetchRocketListData.pending", () => {
    const store = configureStore({
      reducer: rocketsSlice.reducer,
    });

    store.dispatch(fetchRocketListData());

    const state: RocketState = store.getState();
    expect(state.loading).toBe(true);
  });

  test("should handle fetchRocketListData.fulfilled", async () => {
    const store = configureStore({
      reducer: rocketsSlice.reducer,
    });

    await store.dispatch(fetchRocketListData());

    const state: RocketState = store.getState();
    expect(state.loading).toBe(false);
    expect(state.rockets.length).toBe(4);
  });
});
