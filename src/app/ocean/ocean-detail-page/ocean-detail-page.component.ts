import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";

interface Ocean {
  id: string;
}

@Component({
  selector: "app-ocean-detail-page",
  templateUrl: "./ocean-detail-page.component.html",
  styleUrls: ["./ocean-detail-page.component.scss"],
})
export class OceanDetailPageComponent implements OnInit {
  declare ocean$: Observable<Ocean>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.ocean$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of({ id: params.get("id")! })),
    );
  }

  public googleMapOptions: google.maps.MapOptions = {
    center: { lat: 37.448, lng: 126.372 },
    zoom: 14,
  };
}
