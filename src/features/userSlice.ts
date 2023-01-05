import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserService, getUsersService } from "../services";

interface State {
  isBootstraped: boolean;
  isUpdating: boolean;
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  users: Array<any>;
  user: any;
  message: string;
  errorMessage: string;
  hasError: boolean;
  updateStatus: string;
  status: string;
  error: any;
}

const initialState: State = {
  isBootstraped: false,
  isUpdating: false,
  isLoading: false,
  totalPages: 0,
  currentPage: 0,
  users: [],
  user: null,
  message: "",
  errorMessage: "",
  hasError: false,
  updateStatus: "idle",
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await getUsersService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getUserService(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isBootstraped = false;
      state.isLoading = false;
      state.isUpdating = false;
      state.totalPages = 0;
      state.currentPage = 0;
      state.users = [];
      state.user = null;
      state.message = "";
      state.errorMessage = "";
      state.hasError = false;
      state.updateStatus = "idle";
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
        state.isBootstraped = true;
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isBootstraped = true;
        state.status = "succeeded";
        state.users = action.payload.data;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.isBootstraped = true;
        state.isLoading = false;
        state.errorMessage = action.payload as string;
      })
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.errorMessage = action.payload as string;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
