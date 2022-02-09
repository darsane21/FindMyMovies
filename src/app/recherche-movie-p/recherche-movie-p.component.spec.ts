import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheMoviePComponent } from './recherche-movie-p.component';

describe('RechercheMoviePComponent', () => {
  let component: RechercheMoviePComponent;
  let fixture: ComponentFixture<RechercheMoviePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheMoviePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheMoviePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
