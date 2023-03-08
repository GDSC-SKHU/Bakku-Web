import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MypageComponent } from "./mypage/mypage.component";
import { MypageRoutingModule } from "./mypage-routing.module";

@NgModule({
  declarations: [MypageComponent],
  imports: [CommonModule, MypageRoutingModule, MypageRoutingModule],
})
export class MypageModule {}
