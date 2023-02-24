import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

// TODO: Ocean service에서 정의된 인터페이스 활용하기
interface Props {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
}

@Component({
  selector: "app-ocean-card",
  templateUrl: "./ocean-card.component.html",
  styleUrls: ["./ocean-card.component.scss"],
})
export class OceanCardComponent {
  @Input() ocean!: Props;

  constructor(private router: Router) {}

  onCardClick = () => {
    this.router.navigate(["ocean", 1]);
  };
}
