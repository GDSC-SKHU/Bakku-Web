import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Group {
  groupId: number;
  groupName: string;
  totalWeight: number;
  totalCount: number;
  createdDate: string;
}

export type SortTermType = "weight" | "count";

@Injectable({
  providedIn: "root",
})
export class RankingService {
  constructor(private http: HttpClient) {}

  getGroupRankingByTerm(sortTerm: SortTermType) {
    switch (sortTerm) {
      case "count":
        return this.http.get<Group[]>("/ranking/group?sort=count");

      case "weight":
        return this.http.get<Group[]>("/ranking/group?sort=weight");

      default:
        return this.http.get<Group[]>("/ranking/group?sort=weight");
    }
  }
}
