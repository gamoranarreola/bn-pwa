/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from '../environments/environment.default';

export const environment = {
  production: true,
  apiHost: 'https://api.beautynow.app/', // 'https://bn-api-test-dot-beauty-now-313716.wl.r.appspot.com/', // , //'https://bn-api-dot-beauty-now-313716.wl.r.appspot.com/', 'https://bn-api-test-dot-beauty-now-313716.wl.r.appspot.com/',// 
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
