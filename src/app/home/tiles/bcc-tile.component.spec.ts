import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BccTileComponent } from './bcc-tile.component';

describe('BccTileComponent', () => {
  let component: BccTileComponent;
  let fixture: ComponentFixture<BccTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BccTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BccTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
