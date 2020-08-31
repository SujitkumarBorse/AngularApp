import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOfServicingComponent } from './booking-of-servicing.component';

describe('BookingOfServicingComponent', () => {
  let component: BookingOfServicingComponent;
  let fixture: ComponentFixture<BookingOfServicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOfServicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOfServicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
