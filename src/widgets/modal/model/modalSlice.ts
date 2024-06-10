import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ITask } from '../../../entities/task/model/type/ITask';

interface IModalSlice {
    isOpen: boolean;
    tasks: ITask[];
    selectedTask: ITask | null;
    viewMode: 'TaskList' | 'TaskManagement' | 'TaskCreation';
    dayIndex: string;
}

const initialState: IModalSlice = {
    isOpen: false,
    tasks: [],
    selectedTask: null,
    viewMode: 'TaskList',
    dayIndex: '',
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ tasks: ITask[], dayIndex: string }>) => {
            state.isOpen = true;
            state.tasks = action.payload.tasks;
            state.viewMode = 'TaskList';
            state.dayIndex = action.payload.dayIndex;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.tasks = [];
            state.viewMode = 'TaskList';
            state.dayIndex = "";
        },
        switchTotaskList: (state) => {
            state.viewMode = 'TaskList'
        },
        switchToTaskCreation: (state) => {
            state.viewMode = 'TaskCreation'
        },
        switchToTaskManagement: (state, action: PayloadAction<ITask>) => {
            state.viewMode = 'TaskManagement'
            state.selectedTask = action.payload;
        }

    },
})

export const { openModal, closeModal, switchTotaskList, switchToTaskCreation, switchToTaskManagement } = modalSlice.actions

export default modalSlice.reducer;