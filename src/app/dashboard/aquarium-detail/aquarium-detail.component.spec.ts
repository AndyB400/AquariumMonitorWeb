import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumDetailComponent } from './aquarium-detail.component';

describe('AquariumDetailComponent', () => {
  let component: AquariumDetailComponent;
  let fixture: ComponentFixture<AquariumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquariumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
