import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";

interface Event {
  id: string;
}

@Component({
  selector: "app-event-detail-page",
  templateUrl: "./event-detail-page.component.html",
  styleUrls: ["./event-detail-page.component.scss"],
})
export class EventDetailPageComponent implements OnInit {
  declare googleMapApiLoaded: Observable<boolean>;

  declare event$: Observable<Event>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: service get 로직으로 변경
    this.event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of({ id: params.get("id")! })),
    );
  }
}
