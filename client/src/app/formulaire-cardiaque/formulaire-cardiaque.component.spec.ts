import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCardiaqueComponent } from './formulaire-cardiaque.component';

describe('FormulaireCardiaqueComponent', () => {
  let component: FormulaireCardiaqueComponent;
  let fixture: ComponentFixture<FormulaireCardiaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCardiaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCardiaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
