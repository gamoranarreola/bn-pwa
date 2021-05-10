import { environment as defaultEnvironment } from './environment.default';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiHost: 'http://localhost:8000/',
  oauth2: {
    facebook: {
      client_id: 'WgSSZWqaHOFQa7eLThCdLvCbQPYNXaRrOhwcsQNx',
      client_secret: 'GZd7qlAFmolSn3fxQxQtUSTyKSIZRH1Bnq4vjMtgbF1DlnQAyaMSjr7U6QI8sICNrCy1A8KxTerzUhHpFymssA6S9xe1mODpeU87keFMVEufm4KsL7ViahvSUF58EzYE',
    },
  },
  ...defaultEnvironment
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
