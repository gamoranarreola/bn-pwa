import { WorkOrder } from 'src/app/core/models/work-order.class';


export class ShoppingCart {

  workOrder: WorkOrder | undefined;

  constructor(options: Partial<ShoppingCart>) {
    Object.assign(this, options);
  }
}
