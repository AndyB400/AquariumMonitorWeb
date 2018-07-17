import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private authenticateUrl = API_URL + 'auth/token';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(this.authenticateUrl, { username: username, password: password })
            .pipe(map((res: any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
                }
            }));
    }

    logout() {
        console.log('Logging out...');
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}