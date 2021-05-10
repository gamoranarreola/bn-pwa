import { Service } from '../../service/models/service.class';
import { WorkOrder } from './work-order.class';

export class LineItem {

    id: number;
    service: Service;
    service_date: string;
    service_time: string;
    quantity: number;
    price: number;
    status: string;
    beautier_profile_id: number;
    work_order: WorkOrder;

    constructor(options: Partial<LineItem>) {
        Object.assign(this, options);
    }
}
