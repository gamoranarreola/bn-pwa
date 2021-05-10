import { LineItem } from './line-item.class';

export class WorkOrder {

    id: number;
    request_date: string;
    request_time: string;
    customer_profile_id: number;
    place_id: string;
    notes: string;
    line_items: LineItem[];

    constructor(options: Partial<WorkOrder>) {
        Object.assign(this, options);
    }
}
