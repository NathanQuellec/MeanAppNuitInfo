import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaireAvcComponent } from './formulaire-avc.component';

describe('FormulaireAvcComponent', () => {
  let component: FormulaireAvcComponent;
  let fixture: ComponentFixture<FormulaireAvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

