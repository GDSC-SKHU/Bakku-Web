import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RankingPageComponent } from "./ranking-page/ranking-page.component";
import { RankingRoutingModule } from "./ranking-routing.module";

@NgModule({
  declarations: [RankingPageComponent],
  imports: [CommonModule, RankingRoutingModule, FormsModule],
})
export class RankingModule {}
