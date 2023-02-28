import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, switchMap } from "rxjs";

import { Event, EventService } from "../event.service";

@Component({
  selector: "app-event-detail-page",
  templateUrl: "./event-detail-page.component.html",
  styleUrls: ["./event-detail-page.component.scss"],
})
export class EventDetailPageComponent implements OnInit {
  declare event$: Observable<Event>;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.event$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get("id")!;
        return this.eventService.getEventById(id);
      }),
    );
  }
}
