import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";

const MOCK_EVENTS = [
  { id: 1, name: "을왕리 어쩌구 축제" },
  { id: 2, name: "을왕리 어쩌구 축제" },
];

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(private router: Router) {}

  events$ = of(MOCK_EVENTS);

  onEventClick = (id: number) => {
    this.router.navigate(["event", id]);
  };
}
