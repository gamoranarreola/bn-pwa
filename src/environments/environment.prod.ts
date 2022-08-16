/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from '../environments/environment.default';

export const environment = {
  production: true,
  apiHost: 'https://bn-api-dot-beauty-now-313716.wl.r.appspot.com/',
  conekta: {
    publicKey: 'key_GzeFFsxwd6bgEnrqxZdRDsg'
  },
  ...defaultEnvironment,
};
