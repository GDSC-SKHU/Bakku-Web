import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OceanRankComponent } from "./ocean-rank.component";

describe("OceanRankComponent", () => {
  let component: OceanRankComponent;
  let fixture: ComponentFixture<OceanRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OceanRankComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OceanRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
