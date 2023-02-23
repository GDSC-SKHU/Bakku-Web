import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BakkuCardComponent } from "./bakku-card.component";

describe("BakkuCardComponent", () => {
  let component: BakkuCardComponent;
  let fixture: ComponentFixture<BakkuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BakkuCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BakkuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
