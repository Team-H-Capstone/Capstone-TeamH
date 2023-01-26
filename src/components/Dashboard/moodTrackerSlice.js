import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFirebase } from 'react-redux-firebase';

export const updateMood = createAsyncThunk('moods/update', async (mood, { getFirebase }) => {
    try {
        const firebase = getFirebase();
        await firebase.firestore().collection('moods').add({ mood });
        return mood;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const moodTrackerSlice = createSlice({
  name: 'moodTracker',
  initialState: { value: '', status: 'idle', error: null },
  reducers: {
    updateMood: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateMood.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateMood.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(updateMood.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

