import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPlansPageComponent } from './your-plans-page.component';

describe('YourPlansPageComponent', () => {
  let component: YourPlansPageComponent;
  let fixture: ComponentFixture<YourPlansPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPlansPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
