import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { catchError, tap } from "rxjs";
import { IAuthUser, IUser } from "../types/user.interface";
import { API_URL } from "../constants/constants";


@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly toastr: ToastrService
    ) {}

    sighUp(userData: IAuthUser) {
        return this.http
            .post(`${API_URL}/user`, userData)
            .pipe(
                catchError((err) => {
                    this.handeError(err)
                    throw new Error(err.message)
                })
            )
            .subscribe(() => this.toastr.success('created'))
    }

    login(userData: IAuthUser) {
        return this.http
        .post(`${API_URL}/auth/login`, userData)
        .pipe(
            tap(() => {
                this.login(userData)
            }),
            catchError((err) => {
                this.handeError(err)
                throw new Error(err.message)
            })
        )
        .subscribe(
            () => {
                this.toastr.success('logged in')
                this.router.navigate()
            }
        )
    }

    private handeError(err: HttpErrorResponse): void {
        this.toastr.error(err.error.message)
    }
}