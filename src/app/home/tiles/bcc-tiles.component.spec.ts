import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccTilesComponent } from './bcc-tiles.component';

describe('BccTilesComponent', () => {
  let component: BccTilesComponent;
  let fixture: ComponentFixture<BccTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
