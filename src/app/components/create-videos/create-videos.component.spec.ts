import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVideosComponent } from './create-videos.component';

describe('CreateVideosComponent', () => {
  let component: CreateVideosComponent;
  let fixture: ComponentFixture<CreateVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
