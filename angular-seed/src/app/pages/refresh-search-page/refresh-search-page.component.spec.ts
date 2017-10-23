import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshSearchPageComponent } from './refresh-search-page.component';

describe('RefreshSearchPageComponent', () => {
  let component: RefreshSearchPageComponent;
  let fixture: ComponentFixture<RefreshSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
