import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TimesheetService {

    constructor(private http: HttpClient) {

    }

    getTimesheets():Observable<any> {
        return this.http.get(environment.timesheetApiUrl);
    }

}