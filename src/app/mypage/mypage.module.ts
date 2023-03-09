import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { ComponentsModule } from "../shared/components/components.module";
import { MypageComponent } from "./mypage/mypage.component";
import { MypageRoutingModule } from "./mypage-routing.module";

@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatButtonModule,
    ComponentsModule,
    MypageRoutingModule,
  ],
})
export class MypageModule {}
