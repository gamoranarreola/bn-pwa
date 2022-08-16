/* eslint-disable @typescript-eslint/naming-convention */
import { LineItem } from './line-item.class';
export class WorkOrder {

    id: number;
    request_date: string;
    request_time: string;
    customer_profile_id: number;
    place_id: string;
    notes: string;
    line_items: LineItem[];
    status: string;
    address: {
        colonia: string,
        calle: string,
        noInterior: number,
        noExterior: number,
        cp: number,
        pais: string,
        estado: string,
        ciudad: string,

    };

    constructor(options: Partial<WorkOrder>) {
        Object.assign(this, options);
    }
}
