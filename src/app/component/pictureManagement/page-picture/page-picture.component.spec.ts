import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePictureComponent } from './page-picture.component';

describe('PagePictureComponent', () => {
  let component: PagePictureComponent;
  let fixture: ComponentFixture<PagePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
