import { configureStore } from '@reduxjs/toolkit';
import typeTrainerReducer from './typeTrainerSlice';

export const store = configureStore({
  reducer: {
    typeTrainer: typeTrainerReducer,
  },
});
