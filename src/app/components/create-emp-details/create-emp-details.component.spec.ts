import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpDetailsComponent } from './create-emp-details.component';

describe('CreateEmpDetailsComponent', () => {
  let component: CreateEmpDetailsComponent;
  let fixture: ComponentFixture<CreateEmpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
