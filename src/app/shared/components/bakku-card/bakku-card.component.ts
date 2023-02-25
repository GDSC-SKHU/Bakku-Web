import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

// TODO: Bakku service에서 정의된 인터페이스 활용하기
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