import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindMyMovieAdvencedComponent } from './form-find-my-movie-advenced.component';

describe('FormFindMyMovieAdvencedComponent', () => {
  let component: FormFindMyMovieAdvencedComponent;
  let fixture: ComponentFixture<FormFindMyMovieAdvencedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFindMyMovieAdvencedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindMyMovieAdvencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
