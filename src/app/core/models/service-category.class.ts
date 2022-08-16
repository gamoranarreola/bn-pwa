import { Service } from './service.interface';

export class ServiceCategory {

    id: number;
    name: string;
    panel: boolean;
    services: Service[];

    constructor(options: Partial<ServiceCategory>) {
      Object.assign(this, options);
  }
}
