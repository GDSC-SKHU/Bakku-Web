import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import { BakkuCardComponent } from "./bakku-card/bakku-card.component";
import { CarouselIndicatorComponent } from "./carousel/carousel-indicator/carousel-indicator.component";
import { CarouselItemComponent } from "./carousel/carousel-item/carousel-item.component";
import { CarouselWrapperComponent } from "./carousel/carousel-wrapper/carousel-wrapper.component";
import { OceanCardComponent } from "./ocean-card/ocean-card.component";

@NgModule({
  declarations: [
    BakkuCardComponent,
    OceanCardComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
    CarouselIndicatorComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [
    BakkuCardComponent,
    OceanCardComponent,
    CarouselWrapperComponent,
    CarouselItemComponent,
    CarouselIndicatorComponent,
  ],
})
export class ComponentsModule {}
