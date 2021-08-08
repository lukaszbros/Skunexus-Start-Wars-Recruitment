import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alertText: '',
  alertType: 'info',
}

const appSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    showAlert: {
      reducer(state, action) {
        state.alertText = action.payload.text;
        state.alertType = action.payload.type ? action.payload.type : initialState.alertType;
      }
    },
    clearAlert: {
      reducer(state, action) {
        state.alertText = '';
      }
    },
  }
});

export const { showAlert, clearAlert } = appSlice.actions;

export default appSlice.reducer;

