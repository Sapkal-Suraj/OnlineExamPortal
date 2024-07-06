import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palindrome1Component } from './palindrome1.component';

describe('Palindrome1Component', () => {
  let component: Palindrome1Component;
  let fixture: ComponentFixture<Palindrome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Palindrome1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Palindrome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
