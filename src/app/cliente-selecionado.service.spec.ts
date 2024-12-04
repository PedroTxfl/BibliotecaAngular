import { TestBed } from '@angular/core/testing';

import { ClienteSelecionadoService } from './cliente-selecionado.service';

describe('ClienteSelecionadoService', () => {
  let service: ClienteSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
