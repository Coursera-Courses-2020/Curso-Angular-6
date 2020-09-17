import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClubesDeFutbolComponent } from './lista-clubes-de-futbol.component';

describe('ListaClubesDeFutbolComponent', () => {
  let component: ListaClubesDeFutbolComponent;
  let fixture: ComponentFixture<ListaClubesDeFutbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClubesDeFutbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClubesDeFutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
