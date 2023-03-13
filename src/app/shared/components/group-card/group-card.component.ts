import { Component, Input, OnInit } from "@angular/core";
import { Group, SortTermType } from "src/app/ranking/ranking.service";

@Component({
  selector: "app-group-card",
  templateUrl: "./group-card.component.html",
  styleUrls: ["./group-card.component.scss"],
})
export class GroupCardComponent implements OnInit {
  @Input() group!: Group;
  @Input() sortTerm!: SortTermType;

  content = "";

  ngOnInit() {
    this.content = this.getContentBySortTerm();
  }

  getContentBySortTerm(): string {
    switch (this.sortTerm) {
      case "count":
        return `총 ${this.group.totalCount}회 바꾸했어요.`;

      case "weight":
        return `총 ${this.group.totalWeight}kg 바꾸했어요.`;

      default:
        throw new Error("not expected error");
    }
  }
}
