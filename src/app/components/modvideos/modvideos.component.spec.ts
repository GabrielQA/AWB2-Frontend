import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModvideosComponent } from './modvideos.component';

describe('ModvideosComponent', () => {
  let component: ModvideosComponent;
  let fixture: ComponentFixture<ModvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
