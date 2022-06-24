import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";
import { toast } from "react-toastify";

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
  tokens: [],
  token: {},
};

const slice = createSlice({
  name: "token",
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
    getAllTokensSuccess(state, action) {
      state.isLoading = false;
      state.tokens = action.payload;
    },
    getTokenByIdSuccess(state, action) {
      state.isLoading = false;
      state.token = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getAllTokens() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/token/get");
      dispatch(slice.actions.getAllTokensSuccess(response.data.tokens));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getTokenById(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`/api/token/getbyid/${id}`);
      dispatch(slice.actions.getTokenByIdSuccess(response.data.token));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createToken(formdata) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/token/create", formdata);
      dispatch(slice.actions.getAllTokensSuccess(response.data.tokens));
      toast.success(`Token is submitted successfully`);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(`Oops, an error has been occured`);
    }
  };
}

export function rateUser(account, id, rateValue, art, rarity, hype) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/rate", {
        account,
        id,
        rateValue,
        art,
        rarity,
        hype,
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
      toast.success(`You reviewed this NFT as ${rateValue.toFixed(2)} star`);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function leaveComment(data) {
  console.log(data)
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.put(`/api/token/comment/${data.id}`, data);
      dispatch(slice.actions.getTokenByIdSuccess(response.data.token));
      toast.success("You left a comment successfully!");
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function approve(boolean, id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/approve", {
        approved: boolean,
        id,
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
      toast.success(
        boolean === true ? "Approved successfully!" : "Denied successfully!"
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function deleteNFT(id) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/delete", {
        id,
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
      toast.success("Deleted successfully!");
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function promote(id, type) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/promote", {
        id,
        type,
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
      toast.success("Promoted successfully!");
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function filterNFTs(filterData) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/filter", { filterData });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}

export function setNotify(account, id, time) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/user/notify", {
        account,
        id,
        time,
      });
      dispatch(slice.actions.getUsersSuccess(response.data.users));
      toast.success("You set notify successfully!");
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      toast.error(error.error);
    }
  };
}
