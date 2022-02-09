import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindMyMovieComponent } from './form-find-my-movie.component';

describe('FormFindMyMovieComponent', () => {
  let component: FormFindMyMovieComponent;
  let fixture: ComponentFixture<FormFindMyMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFindMyMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindMyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
