import './polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {NgbdTypeaheadPreventManualEntryModule} from './app/typeahead-prevent-manual-entry.module';

platformBrowserDynamic()
    .bootstrapModule(NgbdTypeaheadPreventManualEntryModule)
    .then(ref => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    })
    .catch(err => console.error(err));
