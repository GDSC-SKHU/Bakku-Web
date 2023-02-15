import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { OceanDetailPageComponent } from "./ocean-detail-page/ocean-detail-page.component";
import { OceanRoutingModule } from "./ocean-routing.module";

@NgModule({
  declarations: [OceanDetailPageComponent],
  imports: [CommonModule, OceanRoutingModule],
})
export class OceanModule {}
