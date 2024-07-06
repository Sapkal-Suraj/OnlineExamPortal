import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubesquereComponent } from './cubesquere.component';

describe('CubesquereComponent', () => {
  let component: CubesquereComponent;
  let fixture: ComponentFixture<CubesquereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubesquereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubesquereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
