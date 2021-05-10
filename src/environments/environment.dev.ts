import { environment as defaultEnvironment } from './environment.default';

export const environment = {
  production: false,
  apiHost: 'https://beauty-now-api.herokuapp.com',
  oauth2: {
    facebook: {
      client_id: 'TPoCERvhVaPQ5MgrVgYvo3k2uacUawMFnliRnC9r',
      client_secret: 'ofIqOus9cCUizmLKxBLDBnxuUzYfgrRO9dn9RG6t6hjsH5B0Bd8zU19dYt71DC6mjOh2ZlTqV3C7GsZVawDZfTLFYDz24Li77A2ANyXJF9uVNRkcDCVHXKNJnayfqMz6'
  },
  ...defaultEnvironment
};
