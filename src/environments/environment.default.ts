export const environment = {
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
      // eslint-disable-next-line @typescript-eslint/quotes
      pattern: "^[a-zA-Z\\-\\s\\']*$",
      errorMessage: 'S&oacute;lo letras, gui&oacute;n, ap&oacute;strofe, y espacios.'
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
      pattern: '^[a-zA-Z0-9\\.,\\;\\?\\!\'\\s]*$',
      errorMessage:
        'S&oacute;lo letras, n&uacute;meros, y signos de ortograf&iacute;a',
    },
    creditCard: {
      pattern: '^[0-9\\-\\s]{15,19}$',
      message: 'El n&uacute;mero de su tarjeta al parecer no es v&aacute;lido'
    },
    cvc: {
      pattern: '^[0-9]{3,4}$',
      message: 'El CVC al parecer no es v&aacute;lido'
    }
  },
  routes: {
    services: {
      getServiceCategories: 'api/service-categories',
      getRegions: 'api/services/regions'
    },
    beautiers: {
      getBeautiers: 'api/beautiers'
    },
    workOrders: {
      getForClient: 'api/work-orders',
      createForClient: 'api/work-orders/',
      payment: 'api/payment/',
      sendEmail: 'api/send-email/',
    },
  }
};
