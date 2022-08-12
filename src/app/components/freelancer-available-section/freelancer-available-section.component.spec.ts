import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerAvailableSectionComponent } from './freelancer-available-section.component';

describe('FreelancerAvailableSectionComponent', () => {
  let component: FreelancerAvailableSectionComponent;
  let fixture: ComponentFixture<FreelancerAvailableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerAvailableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerAvailableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
