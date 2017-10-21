import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPlanUnsubscribePageComponent } from './review-plan-unsubscribe-page.component';

describe('ReviewPlanUnsubscribePageComponent', () => {
  let component: ReviewPlanUnsubscribePageComponent;
  let fixture: ComponentFixture<ReviewPlanUnsubscribePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPlanUnsubscribePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPlanUnsubscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
