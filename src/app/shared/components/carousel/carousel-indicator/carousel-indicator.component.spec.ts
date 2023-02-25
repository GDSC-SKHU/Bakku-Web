import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CarouselIndicatorComponent } from "./carousel-indicator.component";

describe("CarouselIndicatorComponent", () => {
  let component: CarouselIndicatorComponent;
  let fixture: ComponentFixture<CarouselIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
