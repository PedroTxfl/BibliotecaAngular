import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNaoDisponivel'
})
export class SimNaoDisponivelPipe implements PipeTransform {

  transform(value: any): string {
    return value === true ? 'SIM' : 'NÃO';
  }
}



