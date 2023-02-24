import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OceanCardComponent } from "./ocean-card.component";

describe("OceanCardComponent", () => {
  let component: OceanCardComponent;
  let fixture: ComponentFixture<OceanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OceanCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OceanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
