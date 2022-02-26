import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersComponentComponent } from './headers-component.component';

describe('HeadersComponentComponent', () => {
  let component: HeadersComponentComponent;
  let fixture: ComponentFixture<HeadersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
