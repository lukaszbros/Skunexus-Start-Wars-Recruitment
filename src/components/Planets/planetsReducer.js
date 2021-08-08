import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPlanets = createAsyncThunk('planets/fetchPlanets', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/');
  return response.data.results;
});

const initialState = {
  planets: [],
  editPlanet: null,
  status: 'idle',
  error: null,
  success: null,
}

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    planetEdit: {
      reducer(state, action) {
        console.log(action.payload);
      }
    },
  },
  extraReducers: {
    [fetchPlanets.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPlanets.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.planets = state.planets.concat(action.payload)
    },
    [fetchPlanets.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { planetEdit } = planetsSlice.actions

export default planetsSlice.reducer;

export const selectAllPlanets = state => state.planets.planets;

