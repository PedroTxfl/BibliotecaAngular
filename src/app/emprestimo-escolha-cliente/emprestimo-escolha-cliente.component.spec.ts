import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoEscolhaClienteComponent } from './emprestimo-escolha-cliente.component';

describe('EmprestimoEscolhaClienteComponent', () => {
  let component: EmprestimoEscolhaClienteComponent;
  let fixture: ComponentFixture<EmprestimoEscolhaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmprestimoEscolhaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoEscolhaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
