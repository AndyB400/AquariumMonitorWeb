import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumNotFoundComponent } from './aquarium-not-found.component';

describe('AquariumNotFoundComponent', () => {
  let component: AquariumNotFoundComponent;
  let fixture: ComponentFixture<AquariumNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquariumNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
