import { Address } from "../employees/address";
import { Contact, Employee } from "../employees/employee";
import { FixedOvertime, PercentOvertime } from "./overtime";
import { ShiftRole } from "./shift-role";

export interface Location {
    id: string,
    name: string,
    address: Address,
    contact : Contact,
    departments : Department[]
}

export interface Department {
    id: string,
    name: string,
    manager: Employee,
}

export interface Shift {
    role: ShiftRole,
    startDateTime: Date,
    endDateTime: Date,
    isOvertime?: boolean,
    isNight?: boolean,
    isFullShift?: boolean,
    name: string,
    id: string,
    hourlyRate: number
    overtimeRate: PercentOvertime | FixedOvertime,
    department: Department,
    location : Location
}

export interface AllocatedShift extends Shift {
    employee: Employee,
    overides: any
}

// week
