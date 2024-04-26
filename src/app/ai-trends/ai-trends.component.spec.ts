import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTrendsComponent } from './ai-trends.component';

describe('AiTrendsComponent', () => {
  let component: AiTrendsComponent;
  let fixture: ComponentFixture<AiTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiTrendsComponent]
    });
    fixture = TestBed.createComponent(AiTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
