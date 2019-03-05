import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeBarComponent } from './silde-bar.component';

describe('SildeBarComponent', () => {
  let component: SildeBarComponent;
  let fixture: ComponentFixture<SildeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SildeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SildeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
