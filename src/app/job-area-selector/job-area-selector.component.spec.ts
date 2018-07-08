import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAreaSelectorComponent } from './job-area-selector.component';

describe('JobAreaSelectorComponent', () => {
  let component: JobAreaSelectorComponent;
  let fixture: ComponentFixture<JobAreaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAreaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAreaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
