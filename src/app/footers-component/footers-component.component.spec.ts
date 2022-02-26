import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersComponentComponent } from './footers-component.component';

describe('FootersComponentComponent', () => {
  let component: FootersComponentComponent;
  let fixture: ComponentFixture<FootersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
