import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPlanSubscribePageComponent } from './review-plan-subscribe-page.component';

describe('ReviewPlanSubscribePageComponent', () => {
  let component: ReviewPlanSubscribePageComponent;
  let fixture: ComponentFixture<ReviewPlanSubscribePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPlanSubscribePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPlanSubscribePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
