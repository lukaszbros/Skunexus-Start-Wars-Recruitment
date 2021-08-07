import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchFilms = createAsyncThunk('planets/fetchFilms', async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  return response.data.results;
});

const initialState = {
  films: [],
  status: 'idle',
  error: null
}

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilms.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.films = state.films.concat(action.payload);
    },
    [fetchFilms.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default filmsSlice.reducer;

export const selectAllFilms = state => state.films.films;

