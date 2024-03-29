import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReduce from "../features/userSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReduce,
  },
});
