import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchText = createAsyncThunk(
  'text/fetchAll',
  async (lang, thunkAPI) => {
    try {
      if (lang === 'eng') {
        const response = await axios.get(
          'https://baconipsum.com/api/?type=all-meat&sentences=4'
        );
        return response.data[0];
      } else if (lang === 'rus') {
        const response = await axios.get(
          'https://fish-text.ru/get?format=json&number=3'
        );
        return response.data.text;
      }
      
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить текст');
    }
  }
);

export default fetchText;