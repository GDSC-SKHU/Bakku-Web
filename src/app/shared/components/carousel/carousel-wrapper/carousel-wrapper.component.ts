import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { Subject, throttleTime } from "rxjs";

import { CarouselService } from "../carousel.service";

@Component({
  selector: "app-carousel-wrapper",
  templateUrl: "./carousel-wrapper.component.html",
  styleUrls: ["./carousel-wrapper.component.scss"],
})
export class CarouselWrapperComponent implements OnInit {
  constructor(
    private carouselService: CarouselService,
    private _elementRef: ElementRef<HTMLDivElement>,
  ) {
    this.carouselService.controledIndex$.subscribe((controledIndex) => {
      this.scrollToIndex(controledIndex);
    });
  }

  private scrollSubject = new Subject<HTMLElement>();
  private scroll$ = this.scrollSubject.asObservable().pipe(throttleTime(300));

  @HostListener("scroll", ["$event.target"])
  onScroll = (target: HTMLElement) => {
    this.scrollSubject.next(target);
  };

  ngOnInit() {
    this.scroll$.subscribe((ref) => this.onThrottledScroll(ref));
    this.carouselService.setItemLength(this._elementRef.nativeElement.childNodes.length);
  }

  private onThrottledScroll = (ref: HTMLElement) => {
    const { offsetWidth, scrollLeft } = ref;
    const index = Math.floor(scrollLeft / offsetWidth);
    this.carouselService.setIndex(index);
  };

  private scrollToIndex(controledIndex: number) {
    const { offsetWidth } = this._elementRef.nativeElement;

    this._elementRef.nativeElement.scrollTo({
      left: controledIndex * offsetWidth,
      behavior: "smooth",
    });
  }
}
