import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LionDanceComponent } from './lion-dance.component';

describe('LionDanceComponent', () => {
  let component: LionDanceComponent;
  let fixture: ComponentFixture<LionDanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LionDanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LionDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
