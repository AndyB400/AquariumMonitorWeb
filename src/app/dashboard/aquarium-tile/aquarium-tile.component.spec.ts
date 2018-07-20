import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumTileComponent } from './aquarium-tile.component';

describe('AquariumTileComponent', () => {
  let component: AquariumTileComponent;
  let fixture: ComponentFixture<AquariumTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquariumTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
