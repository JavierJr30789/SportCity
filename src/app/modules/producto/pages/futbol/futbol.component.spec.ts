import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolComponent } from './futbol.component';

describe('FutbolComponent', () => {
  let component: FutbolComponent;
  let fixture: ComponentFixture<FutbolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutbolComponent]
    });
    fixture = TestBed.createComponent(FutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
