/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from './environment.default';


export const environment = {
  production: false,
  apiHost: 'http://localhost:8000/',
  conekta: {
    publicKey: 'key_GzeFFsxwd6bgEnrqxZdRDsg'
  },
  ...defaultEnvironment
};
