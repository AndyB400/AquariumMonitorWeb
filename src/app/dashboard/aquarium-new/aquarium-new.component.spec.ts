import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumNewComponent } from './aquarium-new.component';

describe('AquariumNewComponent', () => {
  let component: AquariumNewComponent;
  let fixture: ComponentFixture<AquariumNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquariumNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
