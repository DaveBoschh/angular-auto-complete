import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type Locatie = {id: number, name: string};

const states: Locatie[] = [
  {id: 0, name: 'Zutphen'},
  {id: 0, name: 'Deventer'},
  {id: 0, name: 'Dieren'},
];

@Component({
  selector: 'ngbd-typeahead-prevent-manual-entry',
  templateUrl: './typeahead-prevent-manual-entry.html',
  styles: [`.form-control { width: 300px; }`]
})
export class NgbdTypeaheadPreventManualEntry {
  public model: Locatie;

  formatter = (locatie: Locatie) => locatie.name;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => states.filter(locatie => new RegExp(term, 'mi').test(locatie.name)).slice(0, 10))
  )

}
