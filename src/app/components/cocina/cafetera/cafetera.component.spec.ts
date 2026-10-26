import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteraComponent } from './cafetera.component';

describe('CafeteraComponent', () => {
  let component: CafeteraComponent;
  let fixture: ComponentFixture<CafeteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
