import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPlanets = createAsyncThunk('planets/fetchPlanets', async () => {
  const response = await axios.get('https://swapi.dev/api/planets/');
  return response.data.results;
});

const initialState = {
  planets: [],
  status: 'idle',
  error: null
}

const postsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    /*postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        // omit prepare logic
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }*/
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

/*export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions*/

export default postsSlice.reducer;

export const selectAllPlanets = state => state.planets.planets;

