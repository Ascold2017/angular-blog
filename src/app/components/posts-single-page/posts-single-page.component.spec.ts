import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSinglePageComponent } from './posts-single-page.component';

describe('PostsSinglePageComponent', () => {
  let component: PostsSinglePageComponent;
  let fixture: ComponentFixture<PostsSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
