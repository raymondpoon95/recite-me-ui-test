import { configureStore } from "@reduxjs/toolkit";
import rocketsSlice from "../features/rockets/rocketsSlice";
import crewSlice from "../features/crew/crewSlice";

export const store = configureStore({
  reducer: {
    rocket: rocketsSlice.reducer,
    crew: crewSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
