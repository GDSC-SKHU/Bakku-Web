import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

import { BakkuAppendPageComponent } from "./bakku-append-page/bakku-append-page.component";
import { BakkuDetailPageComponent } from "./bakku-detail-page/bakku-detail-page.component";
import { BakkuRoutingModule } from "./bakku-routing.module";

@NgModule({
  declarations: [BakkuAppendPageComponent, BakkuDetailPageComponent],
  imports: [CommonModule, BakkuRoutingModule, GoogleMapsModule],
})
export class BakkuModule {}
