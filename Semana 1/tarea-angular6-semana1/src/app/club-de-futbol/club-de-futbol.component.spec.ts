import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDeFutbolComponent } from './club-de-futbol.component';

describe('ClubDeFutbolComponent', () => {
  let component: ClubDeFutbolComponent;
  let fixture: ComponentFixture<ClubDeFutbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDeFutbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDeFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
