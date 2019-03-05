import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UersManageMentComponent } from './uers-manage-ment.component';

describe('UersManageMentComponent', () => {
  let component: UersManageMentComponent;
  let fixture: ComponentFixture<UersManageMentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UersManageMentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UersManageMentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
