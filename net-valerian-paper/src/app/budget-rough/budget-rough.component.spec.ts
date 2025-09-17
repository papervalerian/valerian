import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRoughComponent } from './budget-rough.component';

describe('BudgetRoughComponent', () => {
  let component: BudgetRoughComponent;
  let fixture: ComponentFixture<BudgetRoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetRoughComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetRoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
