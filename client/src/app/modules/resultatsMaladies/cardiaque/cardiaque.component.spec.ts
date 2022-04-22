import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiaqueComponent } from './cardiaque.component';

describe('CardiaqueComponent', () => {
  let component: CardiaqueComponent;
  let fixture: ComponentFixture<CardiaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
