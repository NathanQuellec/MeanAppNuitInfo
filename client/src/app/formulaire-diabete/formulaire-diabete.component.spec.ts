import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDiabeteComponent } from './formulaire-diabete.component';

describe('FormulaireDiabeteComponent', () => {
  let component: FormulaireDiabeteComponent;
  let fixture: ComponentFixture<FormulaireDiabeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDiabeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDiabeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
