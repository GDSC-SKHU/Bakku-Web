import { Component } from "@angular/core";

// TODO: Ocean service interface 사용
interface Ocean {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-ocean-rank",
  templateUrl: "./ocean-rank.component.html",
  styleUrls: ["./ocean-rank.component.scss"],
})
export class OceanRankComponent {
  selectedOcean = "1";

  oceans: Ocean[] = [
    {
      value: "1",
      viewValue: "을왕리 해수욕장",
    },
    {
      value: "2",
      viewValue: "해운대 해수욕장",
    },
  ];
}
