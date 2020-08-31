import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPendingAmountComponent } from './total-pending-amount.component';

describe('TotalPendingAmountComponent', () => {
  let component: TotalPendingAmountComponent;
  let fixture: ComponentFixture<TotalPendingAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPendingAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPendingAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
