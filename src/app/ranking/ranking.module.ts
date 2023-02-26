import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";

import { ComponentsModule } from "../shared/components/components.module";
import { OceanRankComponent } from "./ocean-rank/ocean-rank.component";
import { RankingPageComponent } from "./ranking-page/ranking-page.component";
import { RankingRoutingModule } from "./ranking-routing.module";
import { TotalRankComponent } from "./total-rank/total-rank.component";

@NgModule({
  declarations: [RankingPageComponent, OceanRankComponent, TotalRankComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    ComponentsModule,
  ],
})
export class RankingModule {}
