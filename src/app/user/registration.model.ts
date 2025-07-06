import { NumberSymbol } from "@angular/common";

export interface Registration {
    Id: number;
    UserName: string;
    FirstName?: string;
    LastName?: string;
    Password: string;
    Email: string;
    IsActive: boolean;
    UserType?: number;
    RegistrationDate: Date | null;
}