import { CommonModule } from "@angular/common";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

import { EventDetailPageComponent } from "./event-detail-page/event-detail-page.component";
import { EventRoutingModule } from "./event-routing.module";

@NgModule({
  declarations: [EventDetailPageComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
})
export class EventModule {}
