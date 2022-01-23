import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { Moralis } from 'moralis';
import { components } from './components';
import { StartOptions } from './models/moralis.models';
import { services } from './services';

@NgModule({
  imports: [],
  declarations: [components],
  providers: [services],
  exports: [components],
})
export class AngularMoralisModule {
  static forRoot(
    options: StartOptions
  ): ModuleWithProviders<AngularMoralisModule> {
    /**
     * Initialize the SDK
     * Docs: https://docs.moralis.io/moralis-server/getting-started/connect-the-sdk#initialize-the-sdk
     **/
    const initializeMoralis = () =>
      Moralis.start(options).then(() =>
        console.info('Moralis has been initialized.')
      );

    return {
      ngModule: AngularMoralisModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: () => initializeMoralis,
          multi: true,
        },
        services,
      ],
    };
  }
}
