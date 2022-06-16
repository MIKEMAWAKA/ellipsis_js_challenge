import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeriesComponentComponent } from './header-series-component.component';

describe('HeaderSeriesComponentComponent', () => {
  let component: HeaderSeriesComponentComponent;
  let fixture: ComponentFixture<HeaderSeriesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeriesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
