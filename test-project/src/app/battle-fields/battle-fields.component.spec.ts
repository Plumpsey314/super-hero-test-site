import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleFieldsComponent } from './battle-fields.component';

describe('BattleFieldsComponent', () => {
  let component: BattleFieldsComponent;
  let fixture: ComponentFixture<BattleFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
