import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsetResetComponent } from './responset-reset.component';

describe('ResponsetResetComponent', () => {
  let component: ResponsetResetComponent;
  let fixture: ComponentFixture<ResponsetResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsetResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsetResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
