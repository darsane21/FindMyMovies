import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviePComponent } from './top-movie-p.component';

describe('TopMoviePComponent', () => {
  let component: TopMoviePComponent;
  let fixture: ComponentFixture<TopMoviePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMoviePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMoviePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
