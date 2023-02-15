import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OceanDetailPageComponent } from "./ocean-detail-page.component";

describe("OceanDetailPageComponent", () => {
  let component: OceanDetailPageComponent;
  let fixture: ComponentFixture<OceanDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OceanDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OceanDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
