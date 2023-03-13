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
  isEmpty = false;

  constructor(
    private route: ActivatedRoute,
    private oceanService: OceanService,
    private bakkuService: BakkuService,
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => params.get("id")!)).subscribe((id) => {
      const numberId = Number(id);

      this.getOceanById(numberId);
      this.getBakkuByOceanId(numberId);
    });
  }

  getOceanById(id: number) {
    this.ocean$ = this.oceanService.getOceanById(id);
  }

  getBakkuByOceanId(oceanId: number) {
    this.bakkuService.getBakkusByOceanId(oceanId).subscribe((res) => {
      if (!res) {
        this.isEmpty = true;
      }

      this.isEmpty = res.empty;
      this.bakkus = res.content;
    });
  }
}
