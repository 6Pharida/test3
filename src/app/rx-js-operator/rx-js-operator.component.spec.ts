import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsOperatorComponent } from './rx-js-operator.component';

describe('RxJsOperatorComponent', () => {
  let component: RxJsOperatorComponent;
  let fixture: ComponentFixture<RxJsOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
