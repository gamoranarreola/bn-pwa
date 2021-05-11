import { WorkOrder } from '../../work-order/models/work-order.class';

export class ShoppingCart {

  workOrder: WorkOrder | undefined;

  constructor(options: Partial<ShoppingCart>) {
    Object.assign(this, options);
  }
}
