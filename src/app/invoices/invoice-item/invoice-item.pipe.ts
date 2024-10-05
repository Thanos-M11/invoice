import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pound',
  standalone: true,
})
export class PoundCurrenyPipe implements PipeTransform {
  transform(value: string | number | null) {
    const poundSymbol = String.fromCharCode(163);
    return `${poundSymbol}  ${value}`;
  }
}

@Pipe({
  name: 'title',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return (
      value.at(0)?.toUpperCase().trim() + value.slice(1).toLowerCase().trim()
    );
  }
}

@Pipe({
  name: 'bullet',
  standalone: true,
})
export class BulletPipe implements PipeTransform {
  transform(value: string | null) {
    const symbol = String.fromCharCode(9679);
    return `${symbol}  ${value}`;
  }
}
