import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMyMovieComponent } from './search-my-movie.component';

describe('SearchMyMovieComponent', () => {
  let component: SearchMyMovieComponent;
  let fixture: ComponentFixture<SearchMyMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMyMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
