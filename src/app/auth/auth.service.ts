import { Injectable } from "@angular/core";

type User = boolean;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: User = false;

  constructor() {}

  login() {
    this.user = true;
  }

  logout() {
    this.user = false;
  }
}
