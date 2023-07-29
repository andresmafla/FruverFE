import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorListComponent } from './administrador-list.component';

describe('AdministradorListComponent', () => {
  let component: AdministradorListComponent;
  let fixture: ComponentFixture<AdministradorListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorListComponent]
    });
    fixture = TestBed.createComponent(AdministradorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
