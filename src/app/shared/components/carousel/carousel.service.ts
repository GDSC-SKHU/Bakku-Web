import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CarouselService {
  constructor() {}

  public currentIndex = 0;
  private itemLengthSubject: Subject<number> = new Subject<number>();
  public itemLength$ = this.itemLengthSubject.asObservable();

  public setIndex = (index: number) => {
    this.currentIndex = index;
  };

  public setItemLength = (length: number) => {
    this.itemLengthSubject.next(length);
  };
}
