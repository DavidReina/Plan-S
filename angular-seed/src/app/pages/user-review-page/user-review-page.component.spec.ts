import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewPageComponent } from './user-review-page.component';

describe('UserReviewPageComponent', () => {
  let component: UserReviewPageComponent;
  let fixture: ComponentFixture<UserReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
