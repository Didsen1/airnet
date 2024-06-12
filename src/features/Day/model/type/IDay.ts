import { ITask } from "../../../Task/model/type/ITask";

export interface IDay {
    date: string;
    isDayOff: boolean;
    tasks: ITask[];
}