import { Contract } from "../payroll/contract";
import { Payroll } from "../payroll/payroll";
import { Address } from "./address";
import { Department, Location } from "../shifts/shift"

export interface Contact {
    email: string,
    phone: string,
}

interface PersonalDetails {
    firstname: string,
    lastname: string,
    dateOfBirth: string,
    address: Address,
    contact: Contact,
}

export interface NextOfKin extends PersonalDetails {

}

export interface Employee extends PersonalDetails {
    id: string,
    contract: Contract[],
    payroll: Payroll,
    nextOfKin: NextOfKin,
    department: Department,
    manager: Employee,
    primaryLocation: Location,
    alternateLocations : Location[]
    isActive: boolean,
}
