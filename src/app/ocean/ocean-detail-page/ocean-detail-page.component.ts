import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Bakku, BakkuService } from "src/app/bakku/bakku.service";

import { Ocean, OceanService } from "../ocean.service";

@Component({
  selector: "app-ocean-detail-page",
  templateUrl: "./ocean-detail-page.component.html",
  styleUrls: ["./ocean-detail-page.component.scss"],
})
export class OceanDetailPageComponent implements OnInit {
  declare ocean$: Observable<Ocean>;
  bakkus: Bakku[] = [];

  constructor(
    private route: ActivatedRoute,
    private oceanService: OceanService,
    private bakkuService: BakkuService,
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => params.get("id")!)).subscribe((id) => {
      const numberId = Number(id);

      this.ocean$ = this.oceanService.getOceanById(numberId);
      this.bakkuService
        .getBakkusByOceanId(numberId)
        .subscribe((res) => (this.bakkus = res.content));
    });
  }
}
