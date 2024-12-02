import { TestBed } from '@angular/core/testing';

import { LivroSelecionadoService } from './livro-selecionado.service';

describe('LivroSelecionadoService', () => {
  let service: LivroSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
