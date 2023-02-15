import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EventDetailPageComponent } from "./event-detail-page/event-detail-page.component";
import { EventRoutingModule } from "./event-routing.module";

@NgModule({
  declarations: [EventDetailPageComponent],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
