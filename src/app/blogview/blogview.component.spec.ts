import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogviewComponent } from './blogview.component';

describe('BlogviewComponent', () => {
  let component: BlogviewComponent;
  let fixture: ComponentFixture<BlogviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogviewComponent]
    });
    fixture = TestBed.createComponent(BlogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
