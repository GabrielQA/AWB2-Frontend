import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserskidsComponent } from './userskids.component';

describe('UserskidsComponent', () => {
  let component: UserskidsComponent;
  let fixture: ComponentFixture<UserskidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserskidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserskidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
