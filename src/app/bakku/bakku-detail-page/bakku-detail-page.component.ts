import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";

interface Bakku {
  id: string;
}

@Component({
  selector: "app-bakku-detail-page",
  templateUrl: "./bakku-detail-page.component.html",
  styleUrls: ["./bakku-detail-page.component.scss"],
})
export class BakkuDetailPageComponent implements OnInit {
  declare bakku$: Observable<Bakku>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bakku$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of({ id: params.get("id")! })),
    );
  }
}
