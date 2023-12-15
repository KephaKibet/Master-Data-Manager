import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreationComponent } from './new-creation.component';

describe('NewCreationComponent', () => {
  let component: NewCreationComponent;
  let fixture: ComponentFixture<NewCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCreationComponent]
    });
    fixture = TestBed.createComponent(NewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
