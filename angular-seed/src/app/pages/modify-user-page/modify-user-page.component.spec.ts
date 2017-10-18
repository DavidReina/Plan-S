import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserPageComponent } from './modify-user-page.component';

describe('ModifyUserPageComponent', () => {
  let component: ModifyUserPageComponent;
  let fixture: ComponentFixture<ModifyUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
