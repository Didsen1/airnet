import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";
import { getDaysOfCurrentMonth } from "../../../shared/getDaysOfCurrentMonth";
import { checkIsDayOff } from "../../../shared/checkIsDayOff";
import type { IMonthState } from './type/IMonthState';
import type { IDay } from "../../../features/Day/model/type/IDay";
import type { ITask } from "../../../entities/task/model/type/ITask";

const initialState: IMonthState = {
    days: [],
}

export const initializeMonth = createAsyncThunk('month/initializeMonth', async () => {
    const dates = getDaysOfCurrentMonth()
    const days: IDay[] = await Promise.all(
        dates.map(async date => {
            const isDayOff = await checkIsDayOff(date);
            return { date, isDayOff, tasks: [] };
        })
    );
    return { days }
})

const calendarSlice = createSlice({
    name: 'Calendar',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ dayIndex: string, task: ITask }>) => {
            const day = state.days.find(day => day.date === action.payload.dayIndex)
            if (day) {
                day.tasks.push(action.payload.task);
            }
        },
        markTaskAsDone: (state, action: PayloadAction<{ dayIndex: string, taskId: string }>) => {
            const day = state.days.find(day => day.date === action.payload.dayIndex)
            if (day) {
                const task = day.tasks.find((task) => task.id = action.payload.taskId)
                if (task) {
                    task.status = !task.status;
                }
            }
        },
        deleteTask: (state, action: PayloadAction<{ dayIndex: string, taskId: string }>) => {
            const day = state.days.find(day => day.date === action.payload.dayIndex)
            if (day) {
                const task = day.tasks.find((task) => task.id = action.payload.taskId)
                if (task) {
                    day.tasks = day.tasks.filter(task => task.id !== action.payload.taskId);
                }
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(initializeMonth.fulfilled, (state, action) => {
            state.days = action.payload.days;
        })
    }
})

export const { addTask, markTaskAsDone, deleteTask } = calendarSlice.actions;
export const selectDats = (state: RootState) => state.calendar.days;
export const selectTasksByDate = (state: RootState, date: string) => {
    const day = state.calendar.days.find(day => day.date === date);
    return day ? day.tasks : [];
};
export default calendarSlice.reducer