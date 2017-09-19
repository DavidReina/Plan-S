import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanPageComponent } from './create-plan-page.component';

describe('CreatePlanPageComponent', () => {
  let component: CreatePlanPageComponent;
  let fixture: ComponentFixture<CreatePlanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
