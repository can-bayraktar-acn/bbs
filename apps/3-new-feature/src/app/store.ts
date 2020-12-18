import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bubbleReducer from '../features/bubble/bubbleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bubble: bubbleReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
