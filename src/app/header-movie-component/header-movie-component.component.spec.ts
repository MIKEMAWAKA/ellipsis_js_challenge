import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMovieComponentComponent } from './header-movie-component.component';

describe('HeaderMovieComponentComponent', () => {
  let component: HeaderMovieComponentComponent;
  let fixture: ComponentFixture<HeaderMovieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMovieComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMovieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
