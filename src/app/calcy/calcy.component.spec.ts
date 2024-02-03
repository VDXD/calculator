import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcyComponent } from './calcy.component';

describe('CalcyComponent', () => {
  let component: CalcyComponent;
  let fixture: ComponentFixture<CalcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
