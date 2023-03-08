import { NgModule } from "@angular/core";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";

import { redirectUnauthorizedToLogin } from "../shared/utils/auth-guard-pipe";
import { MypageComponent } from "./mypage/mypage.component";

const routes: Routes = [
  {
    path: "mypage",
    component: MypageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypageRoutingModule {}
