export class ServiceCategory {

    id: number;
    name: string;

    constructor(options: Partial<ServiceCategory>) {
      Object.assign(this, options);
  }
}
