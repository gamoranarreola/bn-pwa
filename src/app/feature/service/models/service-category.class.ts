import { Service } from './service.class';

export class ServiceCategory {

    id: number;
    name: string;
    panel: boolean;
    services: Service[];

    constructor(options: Partial<ServiceCategory>) {
      Object.assign(this, options);
  }
}
