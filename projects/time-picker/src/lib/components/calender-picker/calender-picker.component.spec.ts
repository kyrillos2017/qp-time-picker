import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderPickerComponent } from './calender-picker.component';

describe('CalenderPickerComponent', () => {
  let component: CalenderPickerComponent;
  let fixture: ComponentFixture<CalenderPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
