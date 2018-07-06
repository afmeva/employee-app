import { Component, Input } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

@Component({ selector: 'app-employee-table', template: '' })
class tableMockComponent {
  @Input() dataSource;
  @Input() buttons;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        tableMockComponent
      ],
      imports: [
        StoreModule.forRoot({
          employees: () => []
        })
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
