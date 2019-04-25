import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusersComponent } from './modusers.component';

describe('ModusersComponent', () => {
  let component: ModusersComponent;
  let fixture: ComponentFixture<ModusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
