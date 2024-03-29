/* eslint-disable @typescript-eslint/naming-convention */
import { Service } from './service.interface';
import { WorkOrder } from './work-order.class';

export class LineItem {

    id: number;
    service: Service;
    service_date: string;
    service_time: string;
    quantity: number;
    price: number;
    beautier_profile_id: number;
    work_order: WorkOrder;

    constructor(options: Partial<LineItem>) {
        Object.assign(this, options);
    }
}
