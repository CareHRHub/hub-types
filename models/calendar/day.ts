import { AllocatedShift, Shift } from "../shifts/shift";

export interface Day {
    currentDate: Date,
    shifts: Shift[]
}