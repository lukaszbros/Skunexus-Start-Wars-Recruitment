import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchResidents = createAsyncThunk('planets/fetchResidents', async (residents) => {
  const response = await Promise.all(residents.map(resident => axios.get(resident)));
  return response.map(response => response.data);
});

const initialState = {
  residents: [],
  status: 'idle',
  error: null
}

const residentsSlice = createSlice({
  name: 'residents',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchResidents.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchResidents.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.residents = [].concat(action.payload);
    },
    [fetchResidents.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default residentsSlice.reducer;

export const selectAllResidents = state => state.residents.residents;

