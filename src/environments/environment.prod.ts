/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from '../environments/environment.default';

export const environment = {
  production: true,
  apiHost: 'https://bn-api-dot-beauty-now-313716.wl.r.appspot.com/',
  oauth2: {
    facebook: {
      client_id: 'EaHd1AmG4dFfy5g0qbbzsoqZaONsLayD6bY61aZv',
      // eslint-disable-next-line max-len
      client_secret: 'EaHd1AmG4dFfy5g0qbbzsoqZaONsLayD6bY61aZv',
    },
  },
  ...defaultEnvironment,
};
