import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import calendarSlice from "../../widgets/calendar/model/calendarSlice";
import modalSlice from "../../widgets/modal/model/modalSlice";

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