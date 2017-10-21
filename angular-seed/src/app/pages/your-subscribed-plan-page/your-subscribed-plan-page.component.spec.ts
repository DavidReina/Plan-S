import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSubscribedPlanPageComponent } from './your-subscribed-plan-page.component';

describe('YourSubscribedPlanPageComponent', () => {
  let component: YourSubscribedPlanPageComponent;
  let fixture: ComponentFixture<YourSubscribedPlanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourSubscribedPlanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourSubscribedPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
