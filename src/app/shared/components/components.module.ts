import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { BakkuCardComponent } from "./bakku-card/bakku-card.component";
import { OceanCardComponent } from "./ocean-card/ocean-card.component";

@NgModule({
  declarations: [BakkuCardComponent, OceanCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [BakkuCardComponent, OceanCardComponent],
})
export class ComponentsModule {}
