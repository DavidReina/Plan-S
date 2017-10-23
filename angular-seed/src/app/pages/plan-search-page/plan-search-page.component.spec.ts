import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSearchPageComponent } from './plan-search-page.component';

describe('PlanSearchPageComponent', () => {
  let component: PlanSearchPageComponent;
  let fixture: ComponentFixture<PlanSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
