import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import calendarSlice from "../../widgets/Calendar/model/calendarSlice";
import modalSlice from "../../widgets/Modal/model/modalSlice";

const store = configureStore({
    reducer: {
        calendar: calendarSlice,
        modal: modalSlice,
    },
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;