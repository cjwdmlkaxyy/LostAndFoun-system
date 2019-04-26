import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSourceComponent } from './public-source.component';

describe('PublicSourceComponent', () => {
  let component: PublicSourceComponent;
  let fixture: ComponentFixture<PublicSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
