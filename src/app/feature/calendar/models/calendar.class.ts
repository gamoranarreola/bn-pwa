export class Calendar {

    id: string;
    beautier_name: string;
    free_busy: any;
    events: any[];

    constructor(options: Partial<Calendar>) {
      Object.assign(this, options);
    }
}
