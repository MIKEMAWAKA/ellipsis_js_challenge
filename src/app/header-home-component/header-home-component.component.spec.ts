import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeComponentComponent } from './header-home-component.component';

describe('HeaderHomeComponentComponent', () => {
  let component: HeaderHomeComponentComponent;
  let fixture: ComponentFixture<HeaderHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
