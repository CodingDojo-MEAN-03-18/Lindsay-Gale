import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBarcodeComponentComponent } from './retro-barcode-component.component';

describe('RetroBarcodeComponentComponent', () => {
  let component: RetroBarcodeComponentComponent;
  let fixture: ComponentFixture<RetroBarcodeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroBarcodeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBarcodeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
