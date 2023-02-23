import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

import { EventRoutingModule } from "../event/event-routing.module";
import { ComponentsModule } from "../shared/components/components.module";
import { OceanDetailPageComponent } from "./ocean-detail-page/ocean-detail-page.component";
import { OceanRoutingModule } from "./ocean-routing.module";

@NgModule({
  declarations: [OceanDetailPageComponent],
  imports: [
    CommonModule,
    OceanRoutingModule,
    EventRoutingModule,
    GoogleMapsModule,
    ComponentsModule,
  ],
})
export class OceanModule {}
