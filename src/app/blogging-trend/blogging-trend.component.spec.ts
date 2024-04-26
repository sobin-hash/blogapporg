import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingTrendComponent } from './blogging-trend.component';

describe('BloggingTrendComponent', () => {
  let component: BloggingTrendComponent;
  let fixture: ComponentFixture<BloggingTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggingTrendComponent]
    });
    fixture = TestBed.createComponent(BloggingTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
