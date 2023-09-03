export enum Paydays {
    SPECIFIC_DATE,
    DAILY,
    WEEKLY,
    MONTHLY,
}

export interface TaxId {
    country: string,
    identifier: string
}

export interface BankDetails {
    sortcode: string,
    accountNo: string,
    bankName: string,
    accountHolderName: string,
}

export interface Payroll {
    payday: Paydays,
    banks: BankDetails[],
    taxId: TaxId[]
}