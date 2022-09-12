import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerAvalilableComponent } from './freelancer-avalilable.component';

describe('FreelancerAvalilableComponent', () => {
  let component: FreelancerAvalilableComponent;
  let fixture: ComponentFixture<FreelancerAvalilableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerAvalilableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerAvalilableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
