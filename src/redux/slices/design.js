import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
// ----------------------------------------------------------------------

function objFromArray(array, key = "id") {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

const initialState = {
  isLoading: false,
  error: false,
  designs: [],
};

const slice = createSlice({
  name: "design",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET LABELS
    getDesignsSuccess(state, action) {
      state.isLoading = false;
      state.designs = action.payload;
    },

    // GET MAILS
    getMailsSuccess(state, action) {
      const mails = action.payload;

      state.isLoading = false;
      state.mails.byId = objFromArray(mails);
      state.mails.allIds = Object.keys(state.mails.byId);
    },

    // GET MAIL
    getMailSuccess(state, action) {
      const mail = action.payload;

      state.mails.byId[mail.id] = mail;
      if (!state.mails.allIds.includes(mail.id)) {
        state.mails.allIds.push(mail.id);
      }
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getDesigns() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/design/getDesigns");
      dispatch(slice.actions.getDesignsSuccess(response.data.designs));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getMails(params) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/mail/mails", { params });
      dispatch(slice.actions.getMailsSuccess(response.data.mails));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
