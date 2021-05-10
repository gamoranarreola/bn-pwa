import { Specialty } from './specialty.class';

export class Beautier {

    id: number;
    custom_user: {
        first_name: string;
        last_name: string;
    };
    calendar_id: string;
    specialties: Specialty[];
    availability: any;

    constructor(options: Partial<Beautier>) {
      Object.assign(this, options);
    }
}
