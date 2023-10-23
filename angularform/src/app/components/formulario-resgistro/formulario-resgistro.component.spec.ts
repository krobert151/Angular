import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioResgistroComponent } from './formulario-resgistro.component';

describe('FormularioResgistroComponent', () => {
  let component: FormularioResgistroComponent;
  let fixture: ComponentFixture<FormularioResgistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioResgistroComponent]
    });
    fixture = TestBed.createComponent(FormularioResgistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
