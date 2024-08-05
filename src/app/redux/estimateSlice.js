import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "estimate",
  initialState: {
    content: "", // Initial path
  },
  reducers: {
    addContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default slice;
