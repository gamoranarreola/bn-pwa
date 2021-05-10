export class Specialty {

    id: number;
    specialty_id: string;
    title: string;

    constructor(options: Partial<Specialty>) {
      Object.assign(this, options);
    }
}
