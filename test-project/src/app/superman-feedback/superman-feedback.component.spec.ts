import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermanFeedbackComponent } from './superman-feedback.component';

describe('SupermanFeedbackComponent', () => {
  let component: SupermanFeedbackComponent;
  let fixture: ComponentFixture<SupermanFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermanFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupermanFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
