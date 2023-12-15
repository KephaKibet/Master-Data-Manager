import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestMonitorComponent } from './material-request-monitor.component';

describe('MaterialRequestMonitorComponent', () => {
  let component: MaterialRequestMonitorComponent;
  let fixture: ComponentFixture<MaterialRequestMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialRequestMonitorComponent]
    });
    fixture = TestBed.createComponent(MaterialRequestMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
