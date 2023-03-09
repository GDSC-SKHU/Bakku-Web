import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, switchMap } from "rxjs";

import { Ocean, OceanService } from "../ocean.service";

@Component({
  selector: "app-ocean-detail-page",
  templateUrl: "./ocean-detail-page.component.html",
  styleUrls: ["./ocean-detail-page.component.scss"],
})
export class OceanDetailPageComponent implements OnInit {
  declare ocean$: Observable<Ocean>;

  constructor(private route: ActivatedRoute, private oceanService: OceanService) {}

  ngOnInit() {
    this.ocean$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.oceanService.getOceanById(params.get("id")!)),
    );
  }
}
