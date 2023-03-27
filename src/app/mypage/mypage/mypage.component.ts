import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Bakku, BakkuService } from "src/app/bakku/bakku.service";

@Component({
  selector: "app-mypage",
  templateUrl: "./mypage.component.html",
  styleUrls: ["./mypage.component.scss"],
})
export class MypageComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private bakkuService: BakkuService,
  ) {}

  bakkuPage: number = 0;
  isLast: boolean = false;

  bakkus: Bakku[] = [];
  isEmpty: boolean = false;

  logout() {
    this.auth.signOut();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.getBakkusByUid();
  }

  getBakkusByUid() {
    this.auth.user.subscribe((user) => {
      this.bakkuService.getBakkusByUid(user!.uid).subscribe((res) => {
        if (!res) {
          this.isEmpty = true;
          return;
        }

        this.isLast = res.last;
        this.isEmpty = res.empty;
        this.bakkus = res.content;
      });
    });
  }

  getMoreBakkusByUid() {
    this.bakkuPage += 1;
    this.auth.user.subscribe((user) => {
      this.bakkuService.getBakkusByUid(user!.uid, this.bakkuPage).subscribe((res) => {
        this.isLast = res.last;
        this.bakkus = [...this.bakkus, ...res.content];
      });
    });
  }
}
