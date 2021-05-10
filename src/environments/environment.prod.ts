import { environment as defaultEnvironment } from '../environments/environment.default';

export const environment = {
  production: true,
  apiHost: 'https://beauty-now-api.herokuapp.com',
  oauth2: {
    facebook: {
      client_id: 'WgSSZWqaHOFQa7eLThCdLvCbQPYNXaRrOhwcsQNx',
      client_secret: 'GZd7qlAFmolSn3fxQxQtUSTyKSIZRH1Bnq4vjMtgbF1DlnQAyaMSjr7U6QI8sICNrCy1A8KxTerzUhHpFymssA6S9xe1mODpeU87keFMVEufm4KsL7ViahvSUF58EzYE',
    },
  },
  ...defaultEnvironment,
};
