/* eslint-disable @typescript-eslint/naming-convention */
import { environment as defaultEnvironment } from '../environments/environment.default';

export const environment = {
  production: true,
  apiHost: 'https://bn-api-dot-beauty-now-313716.wl.r.appspot.com/',
  oauth2: {
    facebook: {
      client_id: 'EaHd1AmG4dFfy5g0qbbzsoqZaONsLayD6bY61aZv',
      // eslint-disable-next-line max-len
      client_secret: 'T6r1bIzi5oFZjdlSwkJIJAysr5ohhe0Ums6HkWXHrQfY5hYWULstLlwBS0vCemBasEiUOGlnxaAlc8ULPE69KZubs2fle4px6iu0lc6Evt0UqPrse7P5l9USQHOwi8a3',
    },
  },
  ...defaultEnvironment,
};
