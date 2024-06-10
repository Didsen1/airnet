import { ITask } from "../../../../entities/task/model/type/ITask";

export interface IDay {
    date: string;
    isDayOff: boolean;
    tasks: ITask[];
}