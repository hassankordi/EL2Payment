import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllFinanceComponent } from './get-all-finance.component';

describe('GetAllFinanceComponent', () => {
  let component: GetAllFinanceComponent;
  let fixture: ComponentFixture<GetAllFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
