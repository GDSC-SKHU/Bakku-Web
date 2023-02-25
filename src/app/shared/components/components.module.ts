import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { BakkuCardComponent } from "./bakku-card/bakku-card.component";
import { CarouselItemComponent } from "./carousel-item/carousel-item.component";
import { CarouselWrapperComponent } from "./carousel-wrapper/carousel-wrapper.component";
import { OceanCardComponent } from "./ocean-card/ocean-card.component";

@NgModule({
  declarations: [
    BakkuCardComponent,
    OceanCardComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [
    BakkuCardComponent,
    OceanCardComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
  ],
})
export class ComponentsModule {}
