/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from './environment.default';

export const environment = {
  production: false,
  apiHost: 'http://localhost:8000/',
  oauth2: {
    facebook: {
      client_id: 'WgSSZWqaHOFQa7eLThCdLvCbQPYNXaRrOhwcsQNx',
      // eslint-disable-next-line max-len
      client_secret: 'GZd7qlAFmolSn3fxQxQtUSTyKSIZRH1Bnq4vjMtgbF1DlnQAyaMSjr7U6QI8sICNrCy1A8KxTerzUhHpFymssA6S9xe1mODpeU87keFMVEufm4KsL7ViahvSUF58EzYE',
    },
  },
  conekta: {
    publicKey: 'key_GzeFFsxwd6bgEnrqxZdRDsg'
  },
  ...defaultEnvironment,
};
