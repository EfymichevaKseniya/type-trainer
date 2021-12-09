import { createSlice } from '@reduxjs/toolkit';
import fetchText from './ActionCreatorTrainer';

export const initialState = {
  text: '',
  status: null,
  error: null,
  accuracy: 100,
  speed: 0,
  textLength: 0,
  percent: 0,
  currentSymbol: '',
  isSymbolWrong: false,
  startTime: null,
  isStart: true,
  isResult: false,
  mistakes: 0,
  duration: 0,
  step: 0,
  outValues: '',
  typedText: ''
};

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

export const  typeTrainerSlice = createSlice({
  name: 'trainer',
  initialState,

  reducers: {
    setText: (state, action) => {
      state.textLength = action.payload.length;
      state.currentSymbol = action.payload[state.step];
    },
    resetState: (state) => {
      state.isStart = !state.isStart;
      state.outValues = '';
      state.step = 0;
      state.speed = 0;
      state.accuracy = 100;
      state.isResult = false;
    },
    isRightKey: (state, action) => {
      state.step += 1;
      state.currentSymbol = action.payload[state.step];
      state.outValues += action.payload; 
      state.isSymbolWrong = false;
      state.percent =((state.outValues.length + 1) * 100) / state.textLength;
    },
    complete: (state) => {
      state.isResult = true;
      state.outValues = '';
    },
    isWrongKey: (state, action) => {
      state.isSymbolWrong = true;
      state.typedText += action.payload;
      state.accuracy = (100 - ((state.mistakes + 1) * 100 / state.textLength)).toFixed(1);
      state.mistakes += 1;
    },
    setSpeed: (state, action) => {
      state.duration = (action.payload - state.startTime) / 60000;
      state.speed = state.duration ? (state.outValues.length / state.duration).toFixed(0) : 1
    },
    start: (state,action) => {
      state.startTime = state.startTime || action.payload
    },
  },
  extraReducers: {
    [fetchText.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchText.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.text = action.payload;
    },
    [fetchText.rejected]: setError,
  },
});

export const { setText, resetState, isRightKey, isWrongKey, start, setSpeed, complete } = typeTrainerSlice.actions;

export default typeTrainerSlice.reducer;