import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BakkuDetailPageComponent } from "./bakku-detail-page.component";

describe("BakkuDetailPageComponent", () => {
  let component: BakkuDetailPageComponent;
  let fixture: ComponentFixture<BakkuDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BakkuDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BakkuDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
