export const environment = {
  production: false,
  mainCalendarId: 'andromeda@beautynow.mx',
  availability: {
    from: '06:00',
    to: '18:00',
  },
  inputValidators: {
    required: {
      errorMessage: 'Este campo es obligatorio',
    },
    min6: {
      errorMessage: 'M&iacute;nimo 6 caracteres',
    },
    max64: {
      errorMessage: 'M&aacute;ximo 64 caracteres',
    },
    max128: {
      errorMessage: 'M&aacute;ximo 128 caracteres',
    },
    email: {
      errorMessage: 'El correo electr&oacute;nico no es v&aacute;lido',
    },
    name: {
      pattern: "^[a-zA-Z\\-\\s\\']*$",
      errorMessage: 'S&oacute;lo letras, gui&oacute;n, y espacios',
    },
    phone: {
      pattern: '^[0-9\\-\\(\\)\\s]*$',
      errorMessage:
        'S&oacute;lo n&uacute;meros, gui&oacute;n, par&eacute;ntesis, y espacios',
    },
    passwordMismatch: {
      errorMessage: 'Las contrase&ntilde;as deben ser iguales',
    },
    textInput: {
      pattern: "^[a-zA-Z0-9\\.,\\;\\?\\!'\\s]*$",
      errorMessage:
        'S&oacute;lo letras, n&uacute;meros, y signos de ortograf&iacute;a',
    },
  },
  routes: {
    auth: {
      register: 'api/auth/users/',
      login: 'api/auth-token/jwt/create/',
      convertToken: 'api/oauth/convert-token/',
      me: 'api/users/me',
    },
    services: {
      getServices: 'api/services',
      getServiceCategories: 'api/service-categories',
      getServicesForCategory: 'api/services/category',
    },
    beautiers: {
      getBeautiers: 'api/beautiers',
      getBeautiersForSpecialty: 'api/beautiers/specialties/',
    },
    calendars: {
      getCalendars: 'api/calendars',
      getCalendarForBeautiers: 'api/beautiers-calendars',
    },
    workOrders: {
      getForClient: 'api/work-orders',
      createForClient: 'api/work-orders/',
      getFormattedAddress: 'api/formatted-address/',
      payment: 'api/payment/',
      sendEmail: 'api/send-email/',
    },
  },
};
