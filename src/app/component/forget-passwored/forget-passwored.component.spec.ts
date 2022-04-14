import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgetPaswordComponent } from './forget-passwored.component';

describe('ForgotPaswordComponent', () => {
  let component: ForgetPaswordComponent;
  let fixture: ComponentFixture<ForgetPaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPaswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});