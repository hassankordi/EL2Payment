import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordeerForAdminComponent } from './allordeer-for-admin.component';

describe('AllordeerForAdminComponent', () => {
  let component: AllordeerForAdminComponent;
  let fixture: ComponentFixture<AllordeerForAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllordeerForAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllordeerForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
