enum OvertimeType {
    PERCENT,
    FIXED
}

export interface PercentOvertime {
    id: string,
    value: number,
    type: OvertimeType.PERCENT
}

export interface FixedOvertime {
    id: string,
    value: number,
    type: OvertimeType.FIXED
}

export type Overtimes = FixedOvertime | PercentOvertime;