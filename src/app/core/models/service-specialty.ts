export class ServiceSpecialty {

    id: number;
    name: string;

    constructor(options: Partial<ServiceSpecialty>) {
      Object.assign(this, options);
  }
}
