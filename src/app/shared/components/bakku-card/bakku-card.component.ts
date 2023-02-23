import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

// TODO: Service에서 정의하기
interface Bakku {
  id: number;
  ocean: string;
  name: string;
  titleImage: string;
  date: string;
  cleanWeight: number;
}

@Component({
  selector: "app-bakku-card",
  templateUrl: "./bakku-card.component.html",
  styleUrls: ["./bakku-card.component.scss"],
})
export class BakkuCardComponent {
  @Input() bakku!: Bakku;

  constructor(private router: Router) {}

  onCardClick = () => {
    // this.router.navigate(["bakku", this.bakku.id]);
    this.router.navigate(["bakku", "1"]);
  };
}
