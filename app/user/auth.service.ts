import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) {

    }

    login(userName: string, password: string) {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        const options = new RequestOptions({ headers });
        const loginInfo = { username: userName, password };
        return this.http.post('/api/login', JSON.stringify(loginInfo), options)
            .do(resp => {
                if (resp) {
                    this.currentUser = resp.json().user as IUser;
                }
            }).catch(error => {
                return Observable.of(false);
            });
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers });

        return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity').map((resp: any) => {
            if (resp._body) {
                return resp.json();
            } else {
                return {

                };
            }
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    logout() {
        this.currentUser = undefined;

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers });

        return this.http.post('/api/logout', JSON.stringify({}), options);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
