import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInputControl } from './simple-input-control.component';

describe('SimpleInputControl', () => {
  let component: SimpleInputControl;
  let fixture: ComponentFixture<SimpleInputControl>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleInputControl]
    });
    fixture = TestBed.createComponent(SimpleInputControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
