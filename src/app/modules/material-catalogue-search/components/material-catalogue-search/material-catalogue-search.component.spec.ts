import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCatalogueSearchComponent } from './material-catalogue-search.component';

describe('MaterialCatalogueSearchComponent', () => {
  let component: MaterialCatalogueSearchComponent;
  let fixture: ComponentFixture<MaterialCatalogueSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialCatalogueSearchComponent]
    });
    fixture = TestBed.createComponent(MaterialCatalogueSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
