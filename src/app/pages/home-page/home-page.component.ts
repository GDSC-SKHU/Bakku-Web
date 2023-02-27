import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Event, EventService } from "src/app/event/event.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private eventService: EventService) {}

  events: Event[] = [];

  onEventClick(id: number) {
    this.router.navigate(["event", id]);
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((res) => (this.events = res.content));
  }
}
