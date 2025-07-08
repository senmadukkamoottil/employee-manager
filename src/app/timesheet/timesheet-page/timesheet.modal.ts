export interface timesheet {
    employeeId: number,
    date: Date | null,
    hours: number,
    project: string,
    taskDescription: string,
    status: string | null
}