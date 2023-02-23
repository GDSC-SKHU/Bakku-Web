import { Component, Input } from "@angular/core";

// TODO: Service에서 정의하기
interface Bakku {
  id: number;
  name: string;
}

@Component({
  selector: "app-bakku-card",
  templateUrl: "./bakku-card.component.html",
  styleUrls: ["./bakku-card.component.scss"],
})
export class BakkuCardComponent {
  @Input() bakku!: Bakku;
}
