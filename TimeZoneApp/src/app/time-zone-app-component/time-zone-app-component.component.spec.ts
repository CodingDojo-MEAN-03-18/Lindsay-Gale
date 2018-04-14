import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneAppComponentComponent } from './time-zone-app-component.component';

describe('TimeZoneAppComponentComponent', () => {
  let component: TimeZoneAppComponentComponent;
  let fixture: ComponentFixture<TimeZoneAppComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeZoneAppComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
