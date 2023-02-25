import { Component } from "@angular/core";

import { CarouselService } from "../carousel.service";

@Component({
  selector: "app-carousel-indicator",
  templateUrl: "./carousel-indicator.component.html",
  styleUrls: ["./carousel-indicator.component.scss"],
})
export class CarouselIndicatorComponent {
  declare itemCount: number[];

  constructor(public carouselService: CarouselService) {
    this.carouselService.itemLength$.subscribe((length) => {
      this.itemCount = Array.from(Array(length).keys());
    });
  }
}
