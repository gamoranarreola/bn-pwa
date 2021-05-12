import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private usStates: {name: string; code: string}[] = [
    {
      name: 'Alabama',
      code: 'AL'
    },
    {
      name: 'Alaska',
      code: 'AK'
    },
    {
      name: 'Arizona',
      code: 'AZ'
    },
    {
      name: 'Arkansas',
      code: 'AR'
    },
    {
      name: 'California',
      code: 'CA'
    },
    {
      name: 'Colorado',
      code: 'CO'
    },
    {
      name: 'Connecticut',
      code: 'CT'
    },
    {
      name: 'Delaware',
      code: 'DE'
    },
    {
      name: 'Florida',
      code: 'FL'
    },
    {
      name: 'Georgia',
      code: 'GA'
    },
    {
      name: 'Hawaii',
      code: 'HI'
    },
    {
      name: 'Idaho',
      code: 'ID'
    },
    {
      name: 'Illinois',
      code: 'IL'
    },
    {
      name: 'Indiana',
      code: 'IN'
    },
    {
      name: 'Iowa',
      code: 'IA'
    },
    {
      name: 'Kansas',
      code: 'KS'
    },
    {
      name: 'Kentucky',
      code: 'KY'
    },
    {
      name: 'Louisiana',
      code: 'LA'
    },
    {
      name: 'Maine',
      code: 'ME'
    },
    {
      name: 'Maryland',
      code: 'MD'
    },
    {
      name: 'Massachusetts',
      code: 'MA'
    },
    {
      name: 'Michigan',
      code: 'MI'
    },
    {
      name: 'Minnesota',
      code: 'MN'
    },
    {
      name: 'Mississippi',
      code: 'MS'
    },
    {
      name: 'Missouri',
      code: 'MO'
    },
    {
      name: 'Montana',
      code: 'MT'
    },
    {
      name: 'Nebraska',
      code: 'NE'
    },
    {
      name: 'Nevada',
      code: 'NV'
    },
    {
      name: 'New Hampshire',
      code: 'NH'
    },
    {
      name: 'New Jersey',
      code: 'NJ'
    },
    {
      name: 'New Mexico',
      code: 'NM'
    },
    {
      name: 'New York',
      code: 'NY'
    },
    {
      name: 'North Carolina',
      code: 'NC'
    },
    {
      name: 'North Dakota',
      code: 'ND'
    },
    {
      name: 'Ohio',
      code: 'OH'
    },
    {
      name: 'Oklahoma',
      code: 'OK'
    },
    {
      name: 'Oregon',
      code: 'OR'
    },
    {
      name: 'Pennsylvania',
      code: 'PA'
    },
    {
      name: 'Rhode Island',
      code: 'RI'
    },
    {
      name: 'South Carolina',
      code: 'SC'
    },
    {
      name: 'South Dakota',
      code: 'SD'
    },
    {
      name: 'Tennessee',
      code: 'TN'
    },
    {
      name: 'Texas',
      code: 'TX'
    },
    {
      name: 'Utah',
      code: 'UT'
    },
    {
      name: 'Vermont',
      code: 'VT'
    },
    {
      name: 'Virginia',
      code: 'VA'
    },
    {
      name: 'Washington',
      code: 'WA'
    },
    {
      name: 'West Virginia',
      code: 'WV'
    },
    {
      name: 'Wisconsin',
      code: 'WI'
    },
    {
      name: 'Wyoming',
      code: 'WY'
    }
  ];

  private mexStates: {name: string, code: string}[] = [
    {
      name: 'Ciudad de México',
      code: 'CMX',
    },
    {
      name: 'Aguascalientes',
      code: 'AGS',
    },
    {
      name: 'Baja California',
      code: 'BC',
    },
    {
      name: 'Baja California Sur',
      code: 'BCS',
    },
    {
      name: 'Campeche',
      code: 'CMP',
    },
    {
      name: 'Chiapas',
      code: 'CHS',
    },
    {
      name: 'Chihuahua',
      code: 'CHI',
    },
    {
      name: 'Coahuila',
      code: 'COA',
    },
    {
      name: 'Colima',
      code: 'COL',
    },
    {
      name: 'Distrito Federal',
      code: 'DF'
    },
    {
      name: 'Durango',
      code: 'DGO',
    },
    {
      name: 'Guanajuato',
      code: 'GTO',
    },
    {
      name: 'Guerrero',
      code: 'GRO',
    },
    {
      name: 'Hidalgo',
      code: 'HGO',
    },
    {
      name: 'Jalisco',
      code: 'JAL',
    },
    {
      name: 'Michoacán',
      code: 'MCH',
    },
    {
      name: 'Morelos',
      code: 'MOR',
    },
    {
      name: 'Estado de México',
      code: 'MEX',
    },
    {
      name: 'Nayarit',
      code: 'NAY',
    },
    {
      name: 'Nuevo León',
      code: 'NL',
    },
    {
      name: 'Oaxaca',
      code: 'OAX',
    },
    {
      name: 'Puebla',
      code: 'PUE',
    },
    {
      name: 'Querétaro',
      code: 'QRO',
    },
    {
      name: 'Quintana Roo',
      code: 'QR',
    },
    {
      name: 'San Luis Potosí',
      code: 'SLP',
    },
    {
      name: 'Sinaloa',
      code: 'SIN',
    },
    {
      name: 'Sonora',
      code: 'SON',
    },
    {
      name: 'Tabasco',
      code: 'TAB',
    },
    {
      name: 'Tamaulipas',
      code: 'TMS',
    },
    {
      name: 'Tlaxcala',
      code: 'TLX',
    },
    {
      name: 'Veracruz',
      code: 'VER',
    },
    {
      name: 'Yucatán',
      code: 'YUC',
    },
    {
      name: 'Zacatecas',
      code: 'ZAC',
    }
  ];

  private countries: {name: string, code: string}[] = [
    {
      name: 'United States',
      code: 'USA'
    },
    {
      name: 'Mexico',
      code: 'MEX'
    }
  ];

  constructor() { }

  getStates(countryCode: string): {name: string; code: string}[] {

    if (countryCode === 'USA') {
      return this.usStates;
    } else {
      return this.mexStates;
    }
  }

  getCountries(): {name: string, code: string}[] {
    return this.countries;
  }
}
