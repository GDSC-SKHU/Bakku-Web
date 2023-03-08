import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-mypage",
  templateUrl: "./mypage.component.html",
  styleUrls: ["./mypage.component.scss"],
})
export class MypageComponent {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  logout() {
    this.auth.signOut();
    this.router.navigate(["/login"]);
  }
}
