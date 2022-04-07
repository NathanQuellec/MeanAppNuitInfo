import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvcComponent } from './avc.component';

describe('AvcComponent', () => {
  let component: AvcComponent;
  let fixture: ComponentFixture<AvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
