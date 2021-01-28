
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'src/app.module';




//enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
