import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindMyMovieAdvancedComponent } from './form-find-my-movie-advanced.component';

describe('FormFindMyMovieAdvancedComponent', () => {
  let component: FormFindMyMovieAdvancedComponent;
  let fixture: ComponentFixture<FormFindMyMovieAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFindMyMovieAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindMyMovieAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
