import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create user

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6505c503ef808d3c66f0718c.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read Action

export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6505c503ef808d3c66f0718c.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      //console.log("showwUser is ", result);
      return result;
    } catch (error) {
      //console.log("error is ", error);
      return rejectWithValue(error);
    }
  }
);

//update User
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updates user data ", data);
    const response = await fetch(
      `https://6505c503ef808d3c66f0718c.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      //console.log("showwUser is ", result);
      return result;
    } catch (error) {
      //console.log("error is ", error);
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6505c503ef808d3c66f0718c.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );

    try {
      const result = await response.json();
      //console.log("showwUser is ", result);
      return result;
    } catch (error) {
      //console.log("error is ", error);
      return rejectWithValue(error);
    }
  }
);

//upate User

const initialState = {
  user: [],
  loading: false,
  error: null,
};

const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(showUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.loading = false;
        if (id) {
          state.user = state.user.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = state.user.map((data) => {
          if (data.id === action.payload.id) {
            console.log("user action is ", action);
            return action.payload;
          } else {
            return data;
          }
        });
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = userDetail.actions;
export default userDetail.reducer;
