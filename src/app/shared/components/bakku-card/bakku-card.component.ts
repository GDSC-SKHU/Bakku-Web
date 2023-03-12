import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Bakku } from "src/app/bakku/bakku.service";

@Component({
  selector: "app-bakku-card",
  templateUrl: "./bakku-card.component.html",
  styleUrls: ["./bakku-card.component.scss"],
})
export class BakkuCardComponent {
  @Input() bakku!: Bakku;

  constructor(private router: Router) {}

  onCardClick = () => {
    this.router.navigate(["bakku", this.bakku.id]);
  };
}
