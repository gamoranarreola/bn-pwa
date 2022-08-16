import { ServiceCategory } from './service-category.class';
import { ServiceSpecialty } from './service-specialty';

export interface Service {

    id: number;
    service_id: string;
    category: ServiceCategory;
    name: string;
    description: string;
    includes_eyelashes: string;
    availability: any;
    duration: string;
    public_price: number;
    specialties: ServiceSpecialty[];
}
