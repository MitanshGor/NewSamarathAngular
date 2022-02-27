import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBearerImageComponentComponent } from './office-bearer-image-component.component';

describe('OfficeBearerImageComponentComponent', () => {
  let component: OfficeBearerImageComponentComponent;
  let fixture: ComponentFixture<OfficeBearerImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeBearerImageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeBearerImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
