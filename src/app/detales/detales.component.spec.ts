import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalesComponent } from './detales.component';

describe('DetalesComponent', () => {
  let component: DetalesComponent;
  let fixture: ComponentFixture<DetalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
