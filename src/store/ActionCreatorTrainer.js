import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchText = createAsyncThunk(
  'text/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://baconipsum.com/api/?type=all-meat&sentences=4'
      );
      return response.data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить текст');
    }
  }
);

export default fetchText;