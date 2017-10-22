import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPlanEditPageComponent } from './your-plan-edit-page.component';

describe('YourPlanEditPageComponent', () => {
  let component: YourPlanEditPageComponent;
  let fixture: ComponentFixture<YourPlanEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPlanEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPlanEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
