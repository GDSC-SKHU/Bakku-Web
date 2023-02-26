import { Component } from "@angular/core";

type SortTermType = "weight" | "reps";

interface SortTerm {
  value: SortTermType;
  viewValue: string;
}

@Component({
  selector: "app-total-rank",
  templateUrl: "./total-rank.component.html",
  styleUrls: ["./total-rank.component.scss"],
})
export class TotalRankComponent {
  selectedSortTerm: SortTermType = "weight";

  sortTerms: SortTerm[] = [
    { value: "weight", viewValue: "무게" },
    { value: "reps", viewValue: "횟수" },
  ];
}
