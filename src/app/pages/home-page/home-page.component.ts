import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Event, EventService } from "src/app/event/event.service";
import { Ocean, OceanService } from "src/app/ocean/ocean.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private eventService: EventService,
    private oceanService: OceanService,
  ) {}

  events: Event[] = [];
  oceans: Ocean[] = [];

  onEventClick(id: number) {
    this.router.navigate(["event", id]);
  }

  ngOnInit() {
    this.getEvents();
    this.oceanService.getCurrentPosition().subscribe(({ lat, lon }) => {
      this.oceanService
        .getOceansByPosition({ lat, lon })
        .subscribe((res) => (this.oceans = res.content));
    });
  }

  getEvents() {
    this.eventService.getEvents().subscribe((res) => (this.events = res.content));
  }
}
