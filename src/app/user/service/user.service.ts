import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Registration } from "../registration.model";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {

    }

    getUsers():Observable<any> {
        return this.http.get(environment.registrationApiUrl);
    }

    updateUser(userData: Registration) {
        if (userData.Id) {
            // Update user api call.
        } else {
            // Create user api call.
        }
    }
}