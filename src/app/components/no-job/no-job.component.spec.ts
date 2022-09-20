import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoJobComponent } from './no-job.component';

describe('NoJobComponent', () => {
  let component: NoJobComponent;
  let fixture: ComponentFixture<NoJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
