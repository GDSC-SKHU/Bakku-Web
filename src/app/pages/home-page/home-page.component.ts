import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Bakku, BakkuService } from "src/app/bakku/bakku.service";
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
    private bakkuService: BakkuService,
  ) {}

  events: Event[] = [];
  oceans: Ocean[] = [];
  bakkus: Bakku[] = [];

  onEventClick(id: number) {
    this.router.navigate(["event", id]);
  }

  ngOnInit() {
    this.getEvents();
    this.getOceans();
    this.getBakkus();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((res) => {
      this.events = res.content;
    });
  }

  getOceans() {
    this.oceanService.getCurrentPosition().subscribe(({ lat, lon }) => {
      this.oceanService.getOceansByPosition({ lat, lon }).subscribe((res) => {
        this.oceans = res.content;
      });
    });
  }

  getBakkus() {
    this.bakkuService.getRecentBakkus().subscribe((res) => {
      this.bakkus = res.content;
    });
  }
}
