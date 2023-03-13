import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Group, RankingService, SortTermType } from "../ranking.service";

interface SortTerm {
  value: SortTermType;
  viewValue: string;
}

@Component({
  selector: "app-total-rank",
  templateUrl: "./total-rank.component.html",
  styleUrls: ["./total-rank.component.scss"],
})
export class TotalRankComponent implements OnInit {
  constructor(private rankingService: RankingService) {}

  private selectedSortTermSubject = new BehaviorSubject<SortTermType>("weight");
  selectedSortTerm$ = this.selectedSortTermSubject.asObservable();

  sortTerms: SortTerm[] = [
    { value: "weight", viewValue: "무게" },
    { value: "count", viewValue: "횟수" },
  ];

  onSelectedSortTermChange(value: SortTermType) {
    this.selectedSortTermSubject.next(value);
  }

  groups: Group[] = [];

  ngOnInit() {
    this.selectedSortTerm$.subscribe((sortTerm) => {
      this.rankingService.getGroupRankingByTerm(sortTerm).subscribe((res) => {
        this.groups = res;
      });
    });
  }
}
