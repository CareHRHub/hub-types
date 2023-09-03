import { Overtimes } from "../shifts/overtime";
import { ShiftRole } from "../shifts/shift-role";

export interface Contract {
    startDate: Date,
    endDate?: Date,
    shiftRoles: ShiftRole[],
    hourlyRate: number,
    overtimeRate: Overtimes,
}