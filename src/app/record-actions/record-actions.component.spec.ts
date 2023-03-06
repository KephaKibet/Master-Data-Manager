import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordActionsComponent } from './record-actions.component';

describe('RecordActionsComponent', () => {
  let component: RecordActionsComponent;
  let fixture: ComponentFixture<RecordActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
