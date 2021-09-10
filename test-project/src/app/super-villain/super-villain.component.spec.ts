import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperVillainComponent } from './super-villain.component';

describe('SuperVillainComponent', () => {
  let component: SuperVillainComponent;
  let fixture: ComponentFixture<SuperVillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperVillainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
