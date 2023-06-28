import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSubadminComponent } from './login-subadmin.component';

describe('LoginSubadminComponent', () => {
  let component: LoginSubadminComponent;
  let fixture: ComponentFixture<LoginSubadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSubadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
