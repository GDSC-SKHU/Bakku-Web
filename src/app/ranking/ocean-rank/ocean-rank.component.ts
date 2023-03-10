import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Bakku, BakkuService } from "src/app/bakku/bakku.service";
import { Ocean, OceanService } from "src/app/ocean/ocean.service";

@Component({
  selector: "app-ocean-rank",
  templateUrl: "./ocean-rank.component.html",
  styleUrls: ["./ocean-rank.component.scss"],
})
export class OceanRankComponent implements OnInit {
  private selectedOceanSubject = new Subject<number>();
  selectedOcean$ = this.selectedOceanSubject.asObservable();

  oceans: Ocean[] = [];
  bakkus: Bakku[] = [];
  isEmpty = false;

  constructor(private oceanService: OceanService, private bakkuService: BakkuService) {}

  ngOnInit() {
    this.getOceans();
    this.selectedOcean$.subscribe((oceanId) =>
      this.bakkuService.getBakkusByOceanId(oceanId).subscribe((res) => {
        if (!res) {
          this.isEmpty = true;
          return;
        }

        this.isEmpty = res.empty;
        this.bakkus = res.content;
      }),
    );
  }

  getOceans() {
    this.oceanService.getCurrentPosition().subscribe(({ lat, lon }) => {
      this.oceanService.getOceansByPosition({ lat, lon }).subscribe((res) => {
        this.oceans = res.content;

        // NOTE: 첫 번째 바다를 기본값으로
        this.selectedOceanSubject.next(res.content[0].id);
      });
    });
  }

  onSelectOceanChange(value: number) {
    this.selectedOceanSubject.next(value);
  }
}
