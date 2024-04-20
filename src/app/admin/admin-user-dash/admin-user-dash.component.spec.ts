import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDashComponent } from './admin-user-dash.component';

describe('AdminUserDashComponent', () => {
  let component: AdminUserDashComponent;
  let fixture: ComponentFixture<AdminUserDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserDashComponent]
    });
    fixture = TestBed.createComponent(AdminUserDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
