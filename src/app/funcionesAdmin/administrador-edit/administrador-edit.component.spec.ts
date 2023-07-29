import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEditComponent } from './administrador-edit.component';

describe('AdministradorEditComponent', () => {
  let component: AdministradorEditComponent;
  let fixture: ComponentFixture<AdministradorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorEditComponent]
    });
    fixture = TestBed.createComponent(AdministradorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
