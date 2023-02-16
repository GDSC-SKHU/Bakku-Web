import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/compat/app";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  faGoogle = faGoogle;

  async login() {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(["/"]);
  }

  logout() {
    this.auth.signOut();
  }
}
