import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticalComponent } from './pratical.component';

describe('PraticalComponent', () => {
  let component: PraticalComponent;
  let fixture: ComponentFixture<PraticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
