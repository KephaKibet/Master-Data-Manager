import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMaterialDetailComponent } from './show-material-detail.component';

describe('ShowMaterialDetailComponent', () => {
  let component: ShowMaterialDetailComponent;
  let fixture: ComponentFixture<ShowMaterialDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMaterialDetailComponent]
    });
    fixture = TestBed.createComponent(ShowMaterialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
