import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconBoxComponent } from './link-icon-box.component';

describe('LinkIconBoxComponent', () => {
  let component: LinkIconBoxComponent;
  let fixture: ComponentFixture<LinkIconBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkIconBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
