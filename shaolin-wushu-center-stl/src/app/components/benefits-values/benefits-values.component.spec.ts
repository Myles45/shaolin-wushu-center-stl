import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsValuesComponent } from './benefits-values.component';

describe('BenefitsValuesComponent', () => {
  let component: BenefitsValuesComponent;
  let fixture: ComponentFixture<BenefitsValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
